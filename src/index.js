import '@solana/wallet-adapter-react-ui/styles.css'
import './styles/index.scss'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import ThemeProvider from './theme/ThemeProvider'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
