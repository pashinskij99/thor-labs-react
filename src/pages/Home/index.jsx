/* eslint-disable no-unused-vars */
import clsx from 'clsx'
import styles from './styles.module.scss'
import { PayCart } from './PayCart'
import ThemeToggleButton from '../../components/UI/Button/ThemeToggle'
import { PaymentCart } from './PaymentCart'

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={clsx('container', styles.home__container)}>
        <div className={styles.leftSide}>
          <PaymentCart />
        </div>
        <div className={styles.rightSide}>
          <PayCart />

          <PayDescription />
        </div>
      </div>
    </div>
  )
}

function PayDescription() {
  return (
    <div className={styles.payDescription}>
      <p className={styles.payDescription__description}>
        <b className={styles.payDescription__b}>Disclaimer:</b> This is a DeFi
        payment that can&apos;t be reversed. Funds go directly to the merchant.{' '}
        <a className={styles.payDescription__link} href='#'>
          See our terms
        </a>
      </p>

      <div className={styles.payDescription__additional}>
        <p className={styles.payDescription__additionalAudited}>Audited</p>
        <ThemeToggleButton
          className={styles.payDescription__additionalAuditedThemeSwitcher}
        />
      </div>
    </div>
  )
}
