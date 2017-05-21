import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions'

import { Login, Register } from '../../components'

class Dashboard extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>Team Dashboard</Text>
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
}, mapDispatchToProps)(Dashboard)
