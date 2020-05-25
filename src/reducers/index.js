import { combineReducers } from 'redux'
import counter from './counter'
import navigation from './navigation'

export default combineReducers({
  counter,
  navigation
})
