import styles from './styles.module.scss'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { QRCodeIcon, USDCIcon } from '../../../components/Icons'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { WalletModal } from '../../../components/WalletModal'

export const PayCart = () => {
  const { connection } = useConnection()
  const wallet = useWallet()
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = () => {
    setOpenModal(true)
  }

  const handleClose = () => {
    setOpenModal(false)
  }

  const handleWalletClick = (name) => {
    wallet.select(name)
    handleClose()
  }

  const { value: price } = useSelector((state) => state.price)

  // console.log({
  //   'connection >>': connection,
  //   'wallet >>': wallet,
  //   'publicKey >>': wallet.publicKey,
  // })

  const wallets = wallet.wallets.sort((a, b) =>
    a.readyState > b.readyState ? 1 : -1
  )

  const handlePay = () => {}

  return (
    <div className={styles.pay}>
      <div className={styles.pay__header}>
        <div className={styles.pay__headerTextWrapper}>
          <USDCIcon />
          <div className={styles.pay__headerText}>Pay with USDC</div>

          {/* <button onClick={handleOpen}>Open modal</button> */}
        </div>
      </div>

      <div className={styles.pay__body}>
        <div className={styles.pay__totalPrice}>
          <div className={styles.pay__totalPriceText}>Total Price: </div>
          <div className={styles.pay__totalPriceCount}>
            ${price || 0} USDC
            {/* ${import.meta.env.VITE_PRICE} USDC */}
          </div>
        </div>
        {wallet.connected ? (
          <button
            className={styles.pay__connectWalletButton}
            onClick={handlePay}
            disabled={!price}
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
          wallets={wallets}
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
