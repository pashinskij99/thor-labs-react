import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isEnd: true,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}

export const timerSlice = createSlice({
  name: 'timerSlice',
  initialState,
  reducers: {
    setTime: (state, action) => {
      state.days = action.payload.days
      state.hours = action.payload.hours
      state.minutes = action.payload.minutes
      state.seconds = action.payload.seconds
      state.isEnd = action.payload.isEnd
    },
  },
})

export const { setTime } = timerSlice.actions
export default timerSlice.reducer
