import { createSlice } from '@reduxjs/toolkit'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'

const initialState = {
  netWorkValue: WalletAdapterNetwork.Mainnet,
}

const networkSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    setNetwork: (state, action) => {
      state.netWorkValue = action.payload
    },
  },
})

export const { setNetwork } = networkSlice.actions

export default networkSlice.reducer
