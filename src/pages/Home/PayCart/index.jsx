import styles from './styles.module.scss'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { QRCodeIcon, SOLIcon } from '../../../components/Icons'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { WalletModal } from '../../../components/WalletModal'
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
  setUserCountSelectNFT,
  setUserPriceForSelectedNFT,
  setUserSOL,
  setUserUSDC,
  setUserWallet,
} from '../../../store/features/solanaData/solanaDataSlice'
import { toast } from 'react-toastify'
import { nftToSOL } from '../../../utils/nftToSol'
import { setTime } from '../../../store/features/timer/timerSlice'
import {
  checkPayment,
  createReserve,
  sendData,
} from '../../../store/features/solanaData/solanaDataActionsThunk'
import { getCurrentDateForReserved } from '../../../utils/getCurrentDateForReserved'

export const PayCart = () => {
  const { connection } = useConnection()
  const { select, publicKey, connected, wallets, sendTransaction } = useWallet()
  const [openModal, setOpenModal] = useState(false)
  const [upd, updateState] = useState()
  const { isEnd } = useSelector((state) => state.timer)
  const {
    price,
    quantity,
    totalNFT,
    purchasedNFTs,
    userWallet: { wallet, fromWhiteList },
  } = useSelector((state) => state.solanaData)
  const setIsOpenState = () =>
    fromWhiteList === IS_NOT_FROM_WHITE_LIST ? true : false
  const dispatch = useDispatch()

  // const total = process.env.REACT_APP_TOTAL
  // const total = 1000
  // const remaining = process.env.REACT_APP_REMAINING
  // const remaining = 800
  // const deadline = '22:08:2023 00:00:00'
  const deadline = process.env.REACT_APP_WHITELIST_PERIOD

  const getTime = useCallback(() => {
    const splitDate = deadline.split(' ')
    const splitYearDate = splitDate[0].split(':')
    const splitTimeDate = splitDate[1].split(':')

    const countDownDate = new Date(
      splitYearDate[2],
      splitYearDate[1] - 1,
      splitYearDate[0],

      splitTimeDate[0],
      splitTimeDate[1],
      splitTimeDate[2]
    ).getTime()

    const now = new Date().getTime()
    const timeLeft = countDownDate - now

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

    dispatch(setTime({ days, hours, minutes, seconds, isEnd: timeLeft < 0 }))
  }, [deadline])

  useEffect(() => {
    if (isEnd) {
      const formData = new FormData()
      const obj = {
        wallet,
        count: quantity,
      }

      Object.entries(obj).forEach(([key, value]) => {
        formData.append(key, value)
      })

      dispatch(checkPayment(formData))
    }
  }, [dispatch, isEnd, quantity, wallet])

  const forceUpdate = useCallback(() => updateState({}), [])

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

  const setUserData = useCallback(
    (data) => {
      dispatch(setUserWallet(data.wallet))
      dispatch(setUserUSDC(data.USDC))
      dispatch(setUserSOL(data.SOL))
      dispatch(setIsFromWhiteList(data.isWhiteListData.isWhiteList))
      dispatch(setUserCountSelectNFT(data.isWhiteListData.count))
      dispatch(setUserPriceForSelectedNFT(nftToSOL(data.isWhiteListData.count)))
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
      let isWhiteListData = {
        isWhiteList: IS_NOT_FROM_WHITE_LIST,
        count: 0,
      }

      for (let i = 0; i < arrayWhiteList.length; i++) {
        const walletInfoFromEnv = arrayWhiteList[i].split('-')

        if (walletInfoFromEnv[0] === walletKey) {
          isWhiteListData.isWhiteList = IS_FROM_WHITE_LIST
          isWhiteListData.count = walletInfoFromEnv[1]
          break
        }
      }

      setUserData({
        wallet: walletKey,
        USDC: balanceUSDC,
        SOL: balanceSOL,
        isWhiteListData,
      })

      if (isWhiteListData.isWhiteList === IS_NOT_FROM_WHITE_LIST) {
        toast.warning(
          "This wallet is not whitelisted, so you won't be able to buy NFTs!"
        )
      }
    }

    let interval
    if (connected) {
      getTime(deadline)
      interval = setInterval(() => getTime(deadline), 1000)

      setData()
    }

    return () => interval && clearInterval(interval)
  }, [
    arrayWhiteList,
    connected,
    connection,
    getTime,
    publicKey,
    setUserData,
    upd,
  ])

  const walletsSorted = wallets.sort((a, b) =>
    a.readyState > b.readyState ? 1 : -1
  )

  // const getCurrentDate = (current) => {
  //   let cDate =
  //     current.getFullYear() +
  //     '.' +
  //     (current.getMonth() + 1) +
  //     '.' +
  //     current.getDate()
  //   let cTime =
  //     current.getHours() +
  //     ':' +
  //     current.getMinutes() +
  //     ':' +
  //     current.getSeconds()
  //   let dateTime = cDate + ' ' + cTime

  //   return dateTime
  // }

  const setDisableForPayButton = () => {
    if (totalNFT === purchasedNFTs) return true
    if (isEnd) return true
    if (!price) return true
    if (setIsOpenState()) return true
    return false
  }

  // const sendSucessTransactionToBD = async (transactionData) => {
  //   const apiPost = 'https://thor-labs.adm-devs.com/api/v1/send-data/'
  //   try {
  //     const formData = new FormData()

  //     for (var key in transactionData) {
  //       formData.append(key, transactionData[key])
  //     }

  //     await fetch(apiPost, { method: 'POST', body: formData })
  //   } catch (error) {
  //     toast.error('An error occurred while sending transaction data.')
  //   }
  // }

  const createTransaction = useCallback(async () => {
    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: new PublicKey(wallet),
          toPubkey: new PublicKey(process.env.REACT_APP_WALLET_TO_TRANSFER),
          lamports: price * LAMPORTS_PER_SOL, // Amount in lamports (1 SOL)
        })
      )

      const signature = await sendTransaction(transaction, connection)

      await connection.confirmTransaction(signature, 'confirmed')

      toast.success('Payment was successful!')

      forceUpdate()

      const formData = new FormData()
      const data = {
        wallet,
        price,
        created_at: getCurrentDateForReserved(),
        count: quantity,
      }

      Object.entries(data).forEach(([key, value]) =>
        formData.append(key, value)
      )

      dispatch(sendData(formData))
    } catch (e) {
      toast.error(
        'An error occurred during payment. You may not have enough money in your account.'
      )
      console.log(e)
    }
  }, [connection, dispatch, price, sendTransaction, wallet])

  const handlePay = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError()

    const formData = new FormData()
    const formDataObj = {
      wallet,
      price,
      created_at: getCurrentDateForReserved(),
      count: quantity,
      limit: totalNFT - purchasedNFTs,
    }

    Object.entries(formDataObj).forEach(([key, value]) => {
      formData.append(key, value)
    })

    const createReserveData = await dispatch(createReserve(formData))

    if (
      createReserveData.payload.status >= 200 &&
      createReserveData.payload.status <= 299
    ) {
      createTransaction()
    } else {
      toast.error('Something went wrong, please try again later.')
    }
  }, [
    createTransaction,
    dispatch,
    price,
    publicKey,
    purchasedNFTs,
    quantity,
    totalNFT,
    wallet,
  ])

  return (
    <div className={styles.pay}>
      <div className={styles.pay__header}>
        <div className={styles.pay__headerTextWrapper}>
          <SOLIcon />
          <p className={styles.pay__headerText}>Pay with SOL</p>

          {/* <button onClick={handleOpen}>Open modal</button> */}
        </div>

        <div className={styles.pay__headerCount}>
          <p>Sold out:</p>
          <div>
            <span>{purchasedNFTs}</span>/<span>{totalNFT}</span>
          </div>
        </div>
      </div>
      <div className={styles.pay__body}>
        <div className={styles.pay__totalPrice}>
          <div className={styles.pay__totalPriceText}>Total Price: </div>
          <div className={styles.pay__totalPriceCount}>
            {price || 0} SOL
            {/* ${import.meta.env.VITE_PRICE} USDC */}
          </div>
        </div>
        {connected ? (
          <button
            className={styles.pay__connectWalletButton}
            onClick={handlePay}
            disabled={setDisableForPayButton()}
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
