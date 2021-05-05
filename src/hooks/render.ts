import { useReducer } from 'react'
import { initialState, dataFetchReducer } from 'reducer/reducer'

export const useRender = () => {
  return useReducer(dataFetchReducer, initialState)
}
