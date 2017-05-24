import * as types from './types'
import Api from '../config/api'
import { Actions } from 'react-native-router-flux';

export function loginUser(authToken) {
  return {
    type: types.LOGIN_USER,
    authToken
  }
}

export function loginError() {
  return {
    type: types.LOGIN_ERROR,
  }
}

export function login(phone_number, password) {
  return(dispatch, getState) => {
    const params = {
      email: phone_number,
      password: password,
    }
    return Api.post('/auth', params).then(resp => {
      console.log(resp)
      dispatch(loginUser(resp.authToken))
      Actions.drawer()
    }).catch( (ex) => {
      console.log('error at login: ' + ex)
    })
  }
}