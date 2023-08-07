import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  myWallet: process.env.REACT_APP_WALLET_TO_TRANSFER,
  defaultPrice: process.env.REACT_APP_PRICE,
  userWallet: {
    wallet: '',
    countSelectNFT: '',
    priceForSelectedNFT: '',
    USDC: '',
    SOL: '',
  },
}

export const solanaDataSlice = createSlice({
  name: 'solanaDataSlice',
  initialState,
  reducers: {
    setUserPriceForSelectedNFT: (state, action) => {
      state.userWallet.priceForSelectedNFT = action.payload
    },
    setUserCountSelectNFT: (state, action) => {
      state.userWallet.countSelectNFT = action.payload
    },
    setUserWallet: (state, action) => {
      state.userWallet.wallet = action.payload
    },
    setUserUSDC: (state, action) => {
      state.userWallet.USDC = action.payload
    },
    setUserSOL: (state, action) => {
      state.userWallet.SOL = action.payload
    },
    clearUserData: (state) => {
      state.userWallet = { wallet: '', price: '', USDC: '', SOL: '' }
    },
  },
})

export const {
  setUserPriceForSelectedNFT,
  setUserWallet,
  setUserUSDC,
  setUserSOL,
  setUserCountSelectNFT,
  clearUserData,
} = solanaDataSlice.actions
export default solanaDataSlice.reducer
