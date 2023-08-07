import styles from './styles.module.scss'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { useDispatch, useSelector } from 'react-redux'
import { capitalized } from '../../utils/capitalized'
import { setNetwork } from '../../store/features/network/networkSlice'

export const Network = () => {
  const network = useSelector((state) => state.network.netWorkValue)
  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(setNetwork(event.target.value))
  }
  return (
    <main className={styles.networkMain}>
      <h1>Select Network</h1>
      <select value={network} onChange={handleChange}>
        <option value={WalletAdapterNetwork.Mainnet}>
          {capitalized(WalletAdapterNetwork.Mainnet)}
        </option>
        <option value={WalletAdapterNetwork.Devnet}>
          {capitalized(WalletAdapterNetwork.Devnet)}
        </option>
        <option value={WalletAdapterNetwork.Testnet}>
          {capitalized(WalletAdapterNetwork.Testnet)}
        </option>
      </select>
    </main>
  )
}
