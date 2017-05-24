import * as types from './types'
import Api from '../config/api'

export function loginUser() {
  return {
    type: types.LOGIN_USER,
  }
}

export function login() {
  return(dispatch, getState) => {
    const params = {
      email: 'thomas@whiteboard.is',
      password: 'thomas123',
    }
    return Api.post('/auth', params).then(resp => {
      console.log(resp)
      dispatch(loginUser())
    }).catch( (ex) => {
      console.log(ex)
    })
  }
}