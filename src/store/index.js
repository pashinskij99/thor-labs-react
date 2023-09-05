import { configureStore } from '@reduxjs/toolkit'
import solanaDataReducer from './features/solanaData/solanaDataSlice'
import networkReducer from './features/network/networkSlice'
import timerReducer from './features/timer/timerSlice'

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    solanaData: solanaDataReducer,
    network: networkReducer,
  },
})
