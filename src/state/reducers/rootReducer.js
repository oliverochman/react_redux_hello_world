// import { reduxTokenAuthReducer } from 'redux-token-auth'
import greetingReducer from './greetingReducer'
import { combineReducers } from 'redux'
import { reduxTokenAuthReducer } from 'redux-token-auth'


const rootReducer = combineReducers({
  greetingReducer,
  reduxTokenAuth: reduxTokenAuthReducer
})
export default rootReducer