const likes = {
  amount: 0
}

export default function reducer(state = likes, action) {
  switch (action.type) {
    case 'INCREMENT_LIKE':
      return { 
        ...state,
        amount: state.amount + 1 }
    case 'DECREMENT_LIKE':
      return { 
        ...state,
        amount: state.amount - 1 }
    default:
      return state
  }
}