// import stocksService from './services'
import {useEffect} from "react"
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts"
import {getStocks} from './redux/asyncActions.ts'

export const Home = () => {
  const dispatch = useAppDispatch()
  const stocks = useAppSelector(state => state.stocks)
  console.log(stocks)

  useEffect(() => {
    dispatch(getStocks(''))
  }, [dispatch])

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};