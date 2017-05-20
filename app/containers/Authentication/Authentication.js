import React, { Component } from 'react'
import { View } from 'react-native'

import { Game, Login, Register } from '../../components'

class Authentication extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isRegistered: true
    }
  }

  registerView = () => {
    this.setState ({
      isRegistered: false
    })
  }

  loginView = () => {
    this.setState ({
      isRegistered: true
    })
  }

  render() {
    return (
      <View>
        {this.state.isRegistered ?
          <Login
            registerView={this.registerView}
          /> :
          <Register
            loginView={this.loginView}
          />
        }
        <Game />
      </View>
    )
  }
}

export default Authentication
