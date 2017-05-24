import { combineReducers } from 'redux'
import routes from './routes'
import * as authenticationReducer from './authentication_reducer'

export default combineReducers(Object.assign(
  routes,
  authenticationReducer,
))