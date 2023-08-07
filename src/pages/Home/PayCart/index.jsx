import styles from './styles.module.scss'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { QRCodeIcon, SOLIcon } from '../../../components/Icons'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  WalletModal,
  WalletModalNotWhiteList,
} from '../../../components/WalletModal'
import { WalletNotConnectedError } from '@solana/wallet-adapter-base'
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js'
import {
  IS_FROM_WHITE_LIST,
  IS_NOT_FROM_WHITE_LIST,
  setIsFromWhiteList,
  setUserSOL,
  setUserUSDC,
  setUserWallet,
} from '../../../store/features/solanaData/solanaDataSlice'
import { toast } from 'react-toastify'

export const PayCart = () => {
  const { connection } = useConnection()
  const { select, publicKey, connected, wallets, sendTransaction } = useWallet()
  const [openModal, setOpenModal] = useState(false)
  const [upd, updateState] = useState()
  const { fromWhiteList } = useSelector((state) => state.solanaData.userWallet)
  const setIsOpenState = () =>
    fromWhiteList === IS_NOT_FROM_WHITE_LIST ? true : false
  // const [openModalNotWhiteList, setOpenModalNotWhiteList] = useState(
  //   setIsOpenState()
  // )

  const forceUpdate = useCallback(() => updateState({}), [])

  const handleOpen = () => {
    setOpenModal(true)
  }

  const handleClose = () => {
    setOpenModal(false)
  }

  // const handleCloseModalNotWhiteList = () => {
  //   setOpenModalNotWhiteList(false)
  // }

  // const handleOpenModalNotWhiteList = () => {
  //   setOpenModalNotWhiteList(true)
  // }

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
      dispatch(setIsFromWhiteList(data.isWhiteList))
    },
    [dispatch]
  )

  const getWhiteListFromString = (string) => {
    return string.split(' ')
  }
  const arrayWhiteList = useMemo(
    () => getWhiteListFromString(process.env.REACT_APP_WHITELIST),
    [process.env.REACT_APP_WHITELIST]
  )

  useEffect(() => {
    const setData = async () => {
      const walletKey = publicKey.toBase58()
      const balanceUSDC = await connection.getBalance(publicKey)
      const balanceSOL = balanceUSDC / LAMPORTS_PER_SOL
      let isWhiteList = IS_NOT_FROM_WHITE_LIST

      for (let i = 0; i < arrayWhiteList.length; i++) {
        const idWallet = arrayWhiteList[i]

        if (idWallet === walletKey) {
          isWhiteList = IS_FROM_WHITE_LIST
          break
        }
      }

      setUserData({
        wallet: walletKey,
        USDC: balanceUSDC,
        SOL: balanceSOL,
        isWhiteList,
      })

      if (isWhiteList === IS_NOT_FROM_WHITE_LIST) {
        toast.warning(
          "This wallet is not whitelisted, so you won't be able to buy NFTs!"
        )
      }
    }

    if (connected) {
      setData()
    }
  }, [arrayWhiteList, connected, connection, publicKey, setUserData, upd])

  const {
    userWallet: { priceForSelectedNFT, wallet },
  } = useSelector((state) => state.solanaData)

  const walletsSorted = wallets.sort((a, b) =>
    a.readyState > b.readyState ? 1 : -1
  )

  const getCurrentDate = (current) => {
    let cDate =
      current.getFullYear() +
      '.' +
      (current.getMonth() + 1) +
      '.' +
      current.getDate()
    let cTime =
      current.getHours() +
      ':' +
      current.getMinutes() +
      ':' +
      current.getSeconds()
    let dateTime = cDate + ' ' + cTime

    return dateTime
  }

  const sendSucessTransactionToBD = async (transactionData) => {
    const apiPost = 'https://thor-labs.adm-devs.com/api/v1/send-data/'
    try {
      const formData = new FormData()

      for (var key in transactionData) {
        formData.append(key, transactionData[key])
      }

      await fetch(apiPost, { method: 'POST', body: formData })
    } catch (error) {
      toast.error('An error occurred while sending transaction data.')
    }
  }

  const handlePay = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError()
    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: new PublicKey(wallet),
          toPubkey: new PublicKey(process.env.REACT_APP_WALLET_TO_TRANSFER),
          lamports: priceForSelectedNFT * LAMPORTS_PER_SOL, // Amount in lamports (1 SOL)
        })
      )

      const signature = await sendTransaction(transaction, connection)

      await connection.confirmTransaction(signature, 'confirmed')

      toast.success('Payment was successful!')

      forceUpdate()

      const data = {
        wallet,
        price: priceForSelectedNFT,
        created_at: getCurrentDate(new Date()),
      }

      sendSucessTransactionToBD(data)
    } catch (e) {
      toast.error(
        'An error occurred during payment. You may not have enough money in your account.'
      )
      console.log(e)
    }
  }, [
    connection,
    forceUpdate,
    priceForSelectedNFT,
    publicKey,
    sendTransaction,
    wallet,
  ])

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
            disabled={!priceForSelectedNFT || setIsOpenState()}
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
        {/* <WalletModalNotWhiteList
          isOpen={openModalNotWhiteList}
          closeModal={handleCloseModalNotWhiteList}
        /> */}
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
