import { combineReducers } from 'redux'
import * as authenticationReducer from './authentication_reducer'

export default combineReducers(Object.assign(
  authenticationReducer,
))