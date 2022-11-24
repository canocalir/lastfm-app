import { configureStore } from '@reduxjs/toolkit'
import detailsReducer from '../features/detailSlice'

export const store = configureStore({
  reducer: {
    details: detailsReducer
  },
})
