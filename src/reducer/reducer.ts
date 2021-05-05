type ActionType = 
  | { type: 'init', payload?: string }
  | { type: 'edit', payload: string }

export const initialState = {
  isEdit: false,
  value: ''
}

export const dataFetchReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'init':
      return {
        ...state,
        isEdit: false,
        value: action.payload ?? '初期値'
      }
    case 'edit':
      return {
        ...state,
        isEdit: true,
        value: action.payload
      }
    default:
      throw new Error()
  }
}
