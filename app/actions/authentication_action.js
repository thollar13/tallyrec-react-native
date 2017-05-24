import * as types from './types'
import Api from '../config/api'

export function loginUser() {
  return {
    type: types.LOGIN_USER,
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
      dispatch(loginUser())
    }).catch( (ex) => {
      console.log(ex)
    })
  }
}