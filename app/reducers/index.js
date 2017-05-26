import { combineReducers } from 'redux'

import * as authenticationReducer from './authentication_reducer'
import * as routes from './routes'

export default combineReducers(Object.assign(
  routes,
  authenticationReducer,
))