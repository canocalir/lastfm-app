import { configureStore } from '@reduxjs/toolkit'
import detailsReducer from '../features/detailSlice'
import themeReducer from '../features/themeSlice'

export const store = configureStore({
  reducer: {
    details: detailsReducer,
    theme: themeReducer
  },
})
