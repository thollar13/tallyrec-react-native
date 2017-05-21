import createReducer from '../config/createReducer'
import * as types from '../actions/types'

export const loginUser = createReducer(false, {
  [types.LOGIN_USER](state, action) {
    return state = true
  }
})