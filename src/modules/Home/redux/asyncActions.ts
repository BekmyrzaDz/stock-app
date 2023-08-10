import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import postsService from "../services";
import {IStock} from "../types/index.ts"

// Get all stocks
export const getStocks = createAsyncThunk<
  IStock[],
  string,
  { rejectValue: string }
>(
  'stocks/getStocks',
  async (_ ,{rejectWithValue}) => {
    try {
      const response: IStock[] = await postsService.getStocks()

      return response
    } catch (error: unknown) {
      if (typeof error === 'string') {
        return rejectWithValue(error)
      }
      if (error instanceof AxiosError) {
        const message =
          error.response?.data?.detail ||
          (error.response &&
            error.response?.data &&
            error.response?.data?.message) ||
          error.message ||
          error.toString()
        return rejectWithValue(message)
      }
      throw error
    }
  }
)
