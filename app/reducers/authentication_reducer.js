import createReducer from '../config/createReducer'
import * as types from '../actions/types'

const initialState = {
  authToken: null,
  loggedIn: false,
  hasRegisterLink: false,
  loginMessage: '',
}

export const user = createReducer(state = initialState, {
  [types.LOGIN_USER](state, action) {
    return {
      ...state,
      authToken: action.authToken,
      loggedIn: true,
    }
  },
  [types.LOGIN_ERROR](state, action) {
    return {
      ...state,
      loginMessage: 'Login Error. Please try again.',
    }
  }
})