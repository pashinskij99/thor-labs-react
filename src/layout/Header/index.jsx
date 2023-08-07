import clsx from 'clsx'
import styles from './styles.module.scss'
import { useWallet } from '@solana/wallet-adapter-react'
import { truncateString } from '../../utils/truncateString'
import {
  CopyIcon,
  DisconnectWalletIcon,
  USDCIcon,
  SOLIcon,
} from '../../components/Icons'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { clearUserData } from '../../store/features/solanaData/solanaDataSlice'

function UserPanel() {
  const { wallet, USDC, SOL } = useSelector(
    (state) => state.solanaData.userWallet
  )

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand('copy', true, text)
    }
  }

  const notify = () => toast.success('The text has been copied!')

  const handleCopyClick = (copyText) => {
    copyTextToClipboard(copyText)
      .then(() => {
        notify()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className={styles.header__userPanel}>
      {/* <div className={styles.header__userPanelUSDC}>
        <div className={styles.header__userPanelUSDCText}>
          <p className={styles.header__userPanelUSDCCount}>${USDC}</p>
          <p className={styles.header__userPanelUSDCDesc}>USDC</p>
        </div>
        <USDCIcon className={styles.header__userPanelUSDCIcon} />
      </div> */}
      <div className={styles.header__userPanelSOL}>
        <div className={styles.header__userPanelSOLText}>
          <p className={styles.header__userPanelSOLCount}>{SOL}</p>
          <p className={styles.header__userPanelSOLDesc}>SOL</p>
        </div>
        <SOLIcon className={styles.header__userPanelSOLIcon} />
      </div>

      <div className={styles.header__userPanelInfo}>
        <div className={styles.header__userPanelInfoId}>
          {truncateString(wallet, 6, 3)}
          <button
            onClick={() => handleCopyClick(wallet)}
            className={styles.header__userPanelInfoIdCopy}
          >
            <CopyIcon />
          </button>
        </div>
        <div className={styles.header__userPanelInfoStatus}>
          Connected wallet
        </div>
      </div>

      <ButtonDisconnectWallet />
    </div>
  )
}

const ButtonDisconnectWallet = () => {
  const { disconnect } = useWallet()
  const dispatch = useDispatch()

  const handleDisconnect = () => {
    disconnect()
    dispatch(clearUserData())
  }

  return (
    <button
      onClick={handleDisconnect}
      className={styles.header__userPanelDisconnect}
    >
      <DisconnectWalletIcon />
    </button>
  )
}

export const Header = () => {
  const wallet = useWallet()

  return (
    <div className={styles.header}>
      <div className={clsx('container', styles.header__container)}>
        <img
          className={styles.header__logo}
          src='/images/logo/logo.png'
          alt='Logo'
          width={60}
          height={60}
        />

        {wallet.connected ? <UserPanel /> : null}
      </div>
    </div>
  )
}
