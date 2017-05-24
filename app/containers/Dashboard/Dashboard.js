import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions'

import { Login, Register, Game } from '../../components'

class Dashboard extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>Team Dashboard</Text>
        <Game />
        <Text onPress={() => Actions.refresh({key: 'drawer', open: value => !value }) }>
          Show Menu
        </Text>
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
