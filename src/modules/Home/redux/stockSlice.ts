import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {getStocks} from './asyncActions'
import {IStock, IStockState} from '../types/index.ts'

const initialState: IStockState = {
  stocks: [],
  isLoading: false,
  isError: false,
}

// Stocks Slice
export const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
  },
  extraReducers: (builder): void => {
    builder
      .addCase(getStocks.pending, (state: IStockState): void => {
        state.isLoading = true
      })
      .addCase(
        getStocks.fulfilled,
        (state: IStockState, action: PayloadAction<IStock[]>): void => {
          state.isLoading = false
          state.stocks = action.payload
        }
      )
      .addCase(getStocks.rejected, (state: IStockState): void => {
        state.isLoading = false
        state.isError = true
        state.stocks = []
      })
  },
})

// export const {} = stocksSlice.actions
export default stocksSlice.reducer
