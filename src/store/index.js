import { configureStore } from '@reduxjs/toolkit'
import solanaDataReducer from './features/solanaData/solanaDataSlice'

export const store = configureStore({
  reducer: {
    solanaData: solanaDataReducer,
  },
})
