// import { reduxTokenAuthReducer } from 'redux-token-auth'
import greetingReducer from './greetingReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  greetingReducer
})
export default rootReducer