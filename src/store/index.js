import { configureStore } from '@reduxjs/toolkit'
import solanaDataReducer from './features/solanaData/solanaDataSlice'
import networkReducer from './features/network/networkSlice'

export const store = configureStore({
  reducer: {
    solanaData: solanaDataReducer,
    network: networkReducer,
  },
})
