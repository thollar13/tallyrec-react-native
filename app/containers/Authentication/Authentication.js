import React, { Component, PropTypes } from 'react'
import { Image, View, Text } from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions'

import { Login, Register } from '../../components'

import styles from './styles'

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

  componentDidMount = () => {
    this.props.login("thomas@whiteboard.is", "thomas123")
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
        <Image
          source={require('../../images/tallyrec-bg2.jpg')}
          style={styles.backgroundImage}
        >
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image source={require('../../images/TallyRec-Logo.png')} style={styles.tallyRecLogo} />
          </View>
          {this.state.isRegistered ?
            <Login
              login={this.login}
              loginMessage={this.props.user.loginMessage}
              showRegisterView={this.showRegisterView}
            /> :
            <Register
              showLoginView={this.showLoginView}
            />
          }
        </Image>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => {
  return {
    user: state.user
  }
}, mapDispatchToProps)(Authentication)
