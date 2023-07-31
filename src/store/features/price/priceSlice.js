import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const priceSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setPrice } = priceSlice.actions
export default priceSlice.reducer
