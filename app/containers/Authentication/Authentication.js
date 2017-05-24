import React, { Component, PropTypes } from 'react'
import { StyleSheet, View, Text } from 'react-native'

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

  login = (phone_number, password) => {
    this.props.login(phone_number, password)
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
      <View style={styles.container}>
        {this.state.isRegistered ?
          <Login
            login={this.login}
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
    loggedIn: state.loginUser,
  }
}, mapDispatchToProps)(Authentication)

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
});