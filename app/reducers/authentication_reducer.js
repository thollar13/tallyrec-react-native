import createReducer from '../config/createReducer'
import * as types from '../actions/types'

const initialState = {
  authToken: null,
  loggedIn: false,
  hasRegisterLink: false,
}

export const user = createReducer(state = initialState, {
  [types.LOGIN_USER](state, action) {
    return {
      ...state,
      loggedIn: true,
    }
  }
})