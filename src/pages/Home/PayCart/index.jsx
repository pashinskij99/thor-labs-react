import styles from './styles.module.scss'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { QRCodeIcon, SOLIcon, USDCIcon } from '../../../components/Icons'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect, useState } from 'react'
import { WalletModal } from '../../../components/WalletModal'
import { WalletNotConnectedError } from '@solana/wallet-adapter-base'
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js'
import {
  setUserSOL,
  setUserUSDC,
  setUserWallet,
} from '../../../store/features/solanaData/solanaDataSlice'

export const PayCart = () => {
  const { connection } = useConnection()
  const { select, publicKey, connected, wallets, sendTransaction } = useWallet()
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = () => {
    setOpenModal(true)
  }

  const handleClose = () => {
    setOpenModal(false)
  }

  const handleWalletClick = (name) => {
    select(name)
    handleClose()
  }

  const dispatch = useDispatch()

  const setUserData = useCallback(
    (data) => {
      dispatch(setUserWallet(data.wallet))
      dispatch(setUserUSDC(data.USDC))
      dispatch(setUserSOL(data.SOL))
    },
    [dispatch]
  )

  useEffect(() => {
    const setData = async () => {
      const balanceUSDC = await connection.getBalance(publicKey)
      const balanceSOL = balanceUSDC / LAMPORTS_PER_SOL

      setUserData({
        wallet: publicKey.toBase58(),
        USDC: balanceUSDC,
        SOL: balanceSOL,
      })
    }

    if (connected) {
      setData()
    }
  }, [connected, connection, publicKey, setUserData])

  const {
    userWallet: { priceForSelectedNFT, wallet },
  } = useSelector((state) => state.solanaData)

  const walletsSorted = wallets.sort((a, b) =>
    a.readyState > b.readyState ? 1 : -1
  )

  // console.log({ LAMPORTS_PER_SOL: 1 * LAMPORTS_PER_SOL })

  const handlePay = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError()
    try {
      console.log({ priceForSelectedNFT })
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: new PublicKey(wallet),
          toPubkey: new PublicKey(process.env.REACT_APP_WALLET_TO_TRANSFER),
          lamports: priceForSelectedNFT * LAMPORTS_PER_SOL, // Amount in lamports (1 SOL)
        })
      )

      const signature = await sendTransaction(transaction, connection)

      await connection.confirmTransaction(signature, 'processed')
    } catch (e) {
      console.log(e)
    }
  }, [connection, priceForSelectedNFT, publicKey, sendTransaction, wallet])

  return (
    <div className={styles.pay}>
      <div className={styles.pay__header}>
        <div className={styles.pay__headerTextWrapper}>
          <SOLIcon />
          <div className={styles.pay__headerText}>Pay with SOL</div>

          {/* <button onClick={handleOpen}>Open modal</button> */}
        </div>
      </div>

      <div className={styles.pay__body}>
        <div className={styles.pay__totalPrice}>
          <div className={styles.pay__totalPriceText}>Total Price: </div>
          <div className={styles.pay__totalPriceCount}>
            {priceForSelectedNFT || 0} SOL
            {/* ${import.meta.env.VITE_PRICE} USDC */}
          </div>
        </div>
        {connected ? (
          <button
            className={styles.pay__connectWalletButton}
            onClick={handlePay}
            disabled={!priceForSelectedNFT}
          >
            Pay
          </button>
        ) : (
          <button
            className={styles.pay__connectWalletButton}
            onClick={handleOpen}
          >
            Connect Wallet
          </button>
        )}

        <WalletModal
          handleWalletClick={handleWalletClick}
          closeModal={handleClose}
          isOpen={openModal}
          wallets={walletsSorted}
        />
      </div>

      <div className={styles.pay__footer}>
        <div className={styles.pay__withQR}>
          <div className={styles.pay__withQRText}>Pay with QR</div>
          <div className={styles.pay__withQRIcon}>
            <QRCodeIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
