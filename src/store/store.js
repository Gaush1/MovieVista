import { configureStore } from '@reduxjs/toolkit'
import hemeSlice from './homeSlice';

export const store = configureStore({
  reducer: {
    home: hemeSlice
  },
})