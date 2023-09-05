import { Header } from '../../layout/Header'
import { Home } from '../../pages/Home'
import { clusterApiUrl } from '@solana/web3.js'
import { useEffect, useMemo } from 'react'
import {
  CoinbaseWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  AlphaWalletAdapter,
  AvanaWalletAdapter,
  BackpackWalletAdapter,
  BitKeepWalletAdapter,
  BraveWalletAdapter,
  CensoWalletAdapter,
  CloverWalletAdapter,
  Coin98WalletAdapter,
  ExodusWalletAdapter,
  FractalWalletAdapter,
  GlowWalletAdapter,
  HuobiWalletAdapter,
  HyperPayWalletAdapter,
  KeystoneWalletAdapter,
} from '@solana/wallet-adapter-wallets'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react'
import { ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Network } from '../../pages/Network'
import { fetchGetTotal } from '../../store/features/solanaData/solanaDataActionsThunk'

export const App = () => {
  const network = useSelector((state) => state.network.netWorkValue)
  const endpoint = useMemo(
    () =>
      network === 'mainnet-beta'
        ? 'https://api.metaplex.solana.com/'
        : clusterApiUrl(network),
    [network]
  )

  const wallet = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new CoinbaseWalletAdapter(),
      new SlopeWalletAdapter(),
      new TorusWalletAdapter({ network }),
      new SolflareWalletAdapter({ network }),
      new AlphaWalletAdapter(),
      new AvanaWalletAdapter(),
      new BackpackWalletAdapter(),
      new BitKeepWalletAdapter(),
      new BraveWalletAdapter(),
      new CensoWalletAdapter(),
      new CloverWalletAdapter(),
      new Coin98WalletAdapter(),
      new ExodusWalletAdapter(),
      new FractalWalletAdapter(),
      new GlowWalletAdapter(),
      new HuobiWalletAdapter(),
      new HyperPayWalletAdapter(),
      new KeystoneWalletAdapter(),
    ],
    [network]
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGetTotal())
  }, [dispatch])

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallet} autoConnect>
        <WalletModalProvider>
          <main>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/network' element={<Network />} />
            </Routes>
          </main>
          <ToastContainer
            position='bottom-right'
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
