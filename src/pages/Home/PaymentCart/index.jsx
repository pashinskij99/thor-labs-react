import styles from './styles.module.scss'
import { truncateString } from '../../../utils/truncateString'
import { QuestionIcon, ShareIcon } from '../../../components/Icons'
import NumericInput from 'react-numeric-input'
import { useSelector } from 'react-redux'

export function PaymentCart() {
  const { quantity, price } = useSelector((state) => state.solanaData)

  function myFormat(num) {
    return num
  }

  return (
    <div className={styles.paymentCart}>
      <div className={styles.paymentCart__header}>
        <div className={styles.paymentCart__statusWrapper}>
          <QuestionIcon className={styles.paymentCart__statusIcon} />
          <p className={styles.paymentCart__status}>Unverified</p>
        </div>

        <div className={styles.paymentCart__highlightedWrapper}>
          <p className={styles.paymentCart__highlightedText}>Recipient:</p>
          <a
            href={`https://solscan.io/account/${process.env.REACT_APP_WALLET_TO_TRANSFER}`}
            target='_blank'
            className={styles.paymentCart__highlightedLink}
            rel='noreferrer'
          >
            {truncateString(process.env.REACT_APP_WALLET_TO_TRANSFER, 6, 3)}
          </a>
        </div>
      </div>

      <div className={styles.paymentCart__main}>
        <div className={styles.paymentCart__mainHeader}>
          <h2 className={styles.paymentCart__title}>Enter the quantity NFTs</h2>
          <NumericInput
            className={styles.paymentCart__priceInput}
            // onChange={handleChange}
            placeholder='NFTs'
            value={quantity}
            format={myFormat}
            disabled
          />
          <h4 className={styles.paymentCart__price}>{price || 0} SOL</h4>
        </div>
      </div>

      <div className={styles.paymentCart__footer}>
        <a
          className={styles.paymentCart__reportLink}
          target='_blank'
          href={`https://solscan.io/address/${process.env.REACT_APP_WALLET_TO_TRANSFER}`}
          rel='noreferrer'
        >
          REPORT LINK
        </a>

        <a className={styles.paymentCart__share} href='#'>
          <p className={styles.paymentCart__shareText}>Share on</p>
          <div className={styles.paymentCart__shareIcon}>
            <ShareIcon />
          </div>
        </a>
      </div>
    </div>
  )
}
