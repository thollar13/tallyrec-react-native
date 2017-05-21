import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions'

import { Login, Register } from '../../components'

class Authentication extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isRegistered: true
    }
  }

  loginUser = () => {
    this.props.loginUser()
  }

  showRegisterView = () => {
    this.setState ({
      isRegistered: false
    })
  }

  showLoginView = () => {
    this.setState ({
      isRegistered: true
    })
  }

  render() {
    return (
      <View>
        <Text>{this.props.loggedIn ? 'User is logged in' : 'User not logged in'}</Text>
        {this.state.isRegistered ?
          <Login
            loginUser={this.loginUser}
            showRegisterView={this.showRegisterView}
          /> :
          <Register
            showLoginView={this.showLoginView}
          />
        }
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => {
  return {
    loggedIn: state.loginUser
  }
}, mapDispatchToProps)(Authentication)
