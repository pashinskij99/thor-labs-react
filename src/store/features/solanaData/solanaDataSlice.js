import { createSlice } from '@reduxjs/toolkit'
import { fetchGetTotal } from './solanaDataActionsThunk'

export const IS_FROM_WHITE_LIST = 'IS_FROM_WHITE_LIST'
export const IS_NOT_FROM_WHITE_LIST = 'IS_NOT_FROM_WHITE_LIST'
const IS_NOT_CONNECTED = 'IS_NOT_CONNECTED'

const initialState = {
  myWallet: process.env.REACT_APP_WALLET_TO_TRANSFER,
  defaultPrice: process.env.REACT_APP_PRICE,
  quantity: 0,
  price: 0,
  totalNFT: process.env.REACT_APP_TOTAL,
  purchasedNFTs: 0,
  reserved: 0,
  userWallet: {
    wallet: '',
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
      state.price = action.payload
    },
    setUserCountSelectNFT: (state, action) => {
      state.quantity = action.payload
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
      state.userWallet = {
        wallet: '',
        USDC: '',
        SOL: '',
        fromWhiteList: IS_NOT_CONNECTED,
      }
      state.price = 0
      state.quantity = 0
    },
    setPurchasedNFTs: (state, action) => {
      state.purchasedNFTs = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetTotal.fulfilled, (state, action) => {
      console.log(action.payload)
      state.purchasedNFTs = +action.payload.total_transactions
      state.reserved = +action.payload.total_reserve
    })
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
  setPurchasedNFTs,
} = solanaDataSlice.actions
export default solanaDataSlice.reducer
