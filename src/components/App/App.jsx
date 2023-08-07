import { Header } from '../../layout/Header'
import { Home } from '../../pages/Home'
import { clusterApiUrl } from '@solana/web3.js'
import {
  WalletAdapterNetwork,
  // WalletError
} from '@solana/wallet-adapter-base'
import { useMemo } from 'react'
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

export const App = () => {
  const network = WalletAdapterNetwork.Devnet
  const endpoint = useMemo(() => clusterApiUrl(network), [network])

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

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallet} autoConnect>
        <WalletModalProvider>
          <main>
            <Header />
            <Home />
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
