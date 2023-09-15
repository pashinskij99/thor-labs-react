import clsx from 'clsx'
import styles from './styles.module.scss'
import { useWallet } from '@solana/wallet-adapter-react'
import { truncateString } from '../../utils/truncateString'
import { CopyIcon, DisconnectWalletIcon, SOLIcon } from '../../components/Icons'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import {
  IS_FROM_WHITE_LIST,
  clearUserData,
} from '../../store/features/solanaData/solanaDataSlice'
import { Link, useLocation } from 'react-router-dom'
import { addZeroBeforeNum } from '../../utils/addZeroBeforeNum'

function UserPanel() {
  const { wallet, SOL, fromWhiteList } = useSelector(
    (state) => state.solanaData.userWallet
  )

  const { days, hours, minutes, seconds, isEnd } = useSelector(
    (state) => state.timer
  )

  async function copyTextToClipboard(text) {
    return 'clipboard' in navigator
      ? await navigator.clipboard.writeText(text)
      : document.execCommand('copy', true, text)
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
    <div className={styles.header__userPanelWrapper}>
      {process.env.REACT_APP_IS_WHITELIST === 'true'
        ? (
          <>
            {fromWhiteList === IS_FROM_WHITE_LIST ? (
              <div className={styles.header__whiteListTimer}>
                {isEnd ? (
                  <p>Whitelist End</p>
                ) : (
                  <>
                    {days ? (
                      <div className={styles.header__whiteListTimerDays}>
                        <p>Days:</p>
                        <span>{addZeroBeforeNum(days)}</span>
                      </div>
                    ) : null}
                    <div className={styles.header__whiteListTimerTime}>
                      <p>Time:</p>
                      <span>
                  {addZeroBeforeNum(hours)}:{addZeroBeforeNum(minutes)}:
                        {addZeroBeforeNum(seconds)}
                </span>
                    </div>
                  </>
                )}
              </div>
            ) : null}
          </>
        )
        : null
      }

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

  let { pathname } = useLocation()

  return (
    <div className={styles.header}>
      <div className={clsx('container', styles.header__container)}>
        <Link to='/'>
          <img
            className={styles.header__logo}
            src='/images/logo/logo.png'
            alt='Logo'
            width={60}
            height={60}
          />
        </Link>

        {wallet.connected && pathname === '/' ? <UserPanel /> : null}
      </div>
    </div>
  )
}
