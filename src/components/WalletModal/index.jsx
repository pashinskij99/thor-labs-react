import clsx from 'clsx'
import Modal from 'react-modal'
import styles from './styles.module.scss'
import { CloseIcon } from '../Icons'
import { useState } from 'react'

export const WalletModal = ({
  handleWalletClick,
  isOpen,
  closeModal,
  classNameWrapper,
  wallets = [],
}) => {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore((prevState) => !prevState)
  }

  return (
    <Modal
      ariaHideApp={false}
      overlayClassName={styles.overlay}
      onRequestClose={closeModal}
      isOpen={isOpen}
      className={clsx(styles.walletModal, classNameWrapper)}
    >
      <div className={clsx(styles.walletModal__header, styles.header)}>
        <h2 className={styles.header__title}>
          Connect a wallet on Solana to continue
        </h2>
        <button onClick={closeModal} className={styles.header__closeButton}>
          <CloseIcon />
        </button>
      </div>
      <ul className={styles.walletModal__body}>
        {wallets.map(({ adapter }, i) => {
          return (
            <li
              onClick={() => handleWalletClick(adapter.name)}
              className={clsx(styles.listItem, styles.listItem, {
                [styles.listItem_hide]: i > 2,
                [styles.listItem_show]: showMore,
              })}
              key={adapter.name}
            >
              <div className={styles.listItem__innerWrapper}>
                <div className={styles.listItem__leftSide}>
                  <img
                    className={styles.listItem__image}
                    width={28}
                    height={28}
                    src={adapter.icon}
                    alt={adapter.name}
                  />
                  <h3 className={styles.listItem__name}>{adapter.name}</h3>
                </div>

                <div className={styles.listItem__rightSide}>
                  <span className={styles.listItem__state}>
                    {adapter.readyState === 'Installed' ? 'Detected' : ''}
                  </span>
                  {/* <button className={styles.listItem__connect}>Connect</button> */}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <div className={clsx(styles.walletModal__footer, styles.footer)}>
        <button
          className={styles.footer__btnMoreWallets}
          onClick={handleShowMore}
        >
          {showMore ? 'Less wallets' : 'More wallets'}
        </button>
      </div>
    </Modal>
  )
}

export const WalletModalNotWhiteList = ({
  handleWalletClick,
  isOpen,
  closeModal,
  classNameWrapper,
  wallets = [],
}) => {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore((prevState) => !prevState)
  }

  return (
    <Modal
      ariaHideApp={false}
      overlayClassName={styles.overlay}
      onRequestClose={closeModal}
      isOpen={isOpen}
      className={clsx(styles.walletModalNotWhiteList, classNameWrapper)}
    >
      <div
        className={clsx(styles.walletModalNotWhiteList__header, styles.header)}
      >
        <h2 className={styles.header__title}>
          Connect a wallet on Solana to continue
        </h2>
        <button onClick={closeModal} className={styles.header__closeButton}>
          <CloseIcon />
        </button>
      </div>
      <ul className={styles.walletModalNotWhiteList__body}>
        {wallets?.map(({ adapter }, i) => {
          return (
            <li
              onClick={() => handleWalletClick(adapter.name)}
              className={clsx(styles.listItem, styles.listItem, {
                [styles.listItem_hide]: i > 2,
                [styles.listItem_show]: showMore,
              })}
              key={adapter.name}
            >
              <div className={styles.listItem__innerWrapper}>
                <div className={styles.listItem__leftSide}>
                  <img
                    className={styles.listItem__image}
                    width={28}
                    height={28}
                    src={adapter.icon}
                    alt={adapter.name}
                  />
                  <h3 className={styles.listItem__name}>{adapter.name}</h3>
                </div>

                <div className={styles.listItem__rightSide}>
                  <span className={styles.listItem__state}>
                    {adapter.readyState === 'Installed' ? 'Detected' : ''}
                  </span>
                  {/* <button className={styles.listItem__connect}>Connect</button> */}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <div className={clsx(styles.walletModal__footer, styles.footer)}>
        <button
          className={styles.footer__btnMoreWallets}
          onClick={handleShowMore}
        >
          {showMore ? 'Less wallets' : 'More wallets'}
        </button>
      </div>
    </Modal>
  )
}
