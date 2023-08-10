import { configureStore } from '@reduxjs/toolkit'
import {stocksSlice} from '../modules/Home/redux/stockSlice.ts'

export const store = configureStore({
  reducer: {
    stocks: stocksSlice.reducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch