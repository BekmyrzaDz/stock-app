import axios from "../../../api/axios.ts"
import {IStock} from "../types/index.ts"

const TOKEN = import.meta.env.VITE_APP_API_TOKEN

// Get all stocks
const getStocks = async (): Promise<IStock[]> => {
  const response = await axios.get(`/stock/msft/chart/5y?token=${TOKEN}`)

  return response.data
}

const stocksService = {
  getStocks,
}

export default stocksService