import axios from 'axios'

export const axiosInstanceBase = axios.create({
  baseURL: process.env.REACT_APP_API,
})
