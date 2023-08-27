import { configureStore } from '@reduxjs/toolkit'
import dataFetch from './dataFetch'

export const store = configureStore({
  reducer: {
    AsyncFetchData : dataFetch,
  },
})