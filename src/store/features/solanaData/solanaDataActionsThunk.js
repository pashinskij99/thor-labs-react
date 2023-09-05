import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstanceBase } from '../../../lib/axiosBase'

export const fetchGetTotal = createAsyncThunk(
  'solanaDataSlice/fetchGetTotal',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstanceBase.get('/get-total/')

      return response.data
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const createReserve = createAsyncThunk(
  'solanaDataSlice/createReserve',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstanceBase.post('/create-reserve/', data)

      return response.data
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const sendData = createAsyncThunk(
  'solanaDataSlice/sendData',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstanceBase.post('/send-data/', data)

      return response.data
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const checkPayment = createAsyncThunk(
  'solanaDataSlice/checkPayment',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstanceBase.post('/check-payment/', data)

      return response.data
    } catch (error) {
      rejectWithValue(error)
    }
  }
)
