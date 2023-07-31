import { configureStore } from '@reduxjs/toolkit'
import priceReducer from './features/price/priceSlice'

export const store = configureStore({
  reducer: {
    price: priceReducer,
  },
})
