import { createSlice } from '@reduxjs/toolkit'

export const IS_FROM_WHITE_LIST = 'IS_FROM_WHITE_LIST'
export const IS_NOT_FROM_WHITE_LIST = 'IS_NOT_FROM_WHITE_LIST'
const IS_NOT_CONNECTED = 'IS_NOT_CONNECTED'

const initialState = {
  myWallet: process.env.REACT_APP_WALLET_TO_TRANSFER,
  defaultPrice: process.env.REACT_APP_PRICE,
  userWallet: {
    wallet: '',
    countSelectNFT: '',
    priceForSelectedNFT: '',
    USDC: '',
    SOL: '',
    fromWhiteList: IS_NOT_CONNECTED, // isFromWhiteList | isNotFromWhiteList | isNotConnected
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
    setIsFromWhiteList: (state, action) => {
      state.userWallet.fromWhiteList = action.payload
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
  setIsFromWhiteList,
  clearUserData,
} = solanaDataSlice.actions
export default solanaDataSlice.reducer
