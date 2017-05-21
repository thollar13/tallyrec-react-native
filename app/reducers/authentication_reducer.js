import createReducer from '../config/createReducer'
import * as types from '../actions/types'

export const loginUser = createReducer(0, {
  [types.LOGIN_USER](state, action) {
    return state = 1
  }
})