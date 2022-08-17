import { createStore, combineReducers} from 'redux'
import reducer from './Reducer'

const reducers = combineReducers({
  reducer
})

const store = createStore(reducers)

export default store