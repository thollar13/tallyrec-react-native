import React, { Component, PropTypes } from 'react'
import { Image, View, Text, Button } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions'

import { Header, Login, Register, Game } from '../../components'
import styles from './styles'

class Dashboard extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>Team Dashboard</Text>
        <Text onPress={Actions.schedule}>Go to Schedule page</Text>
        <Text onPress={Actions.roster}>Go to Roster page</Text>
        <Game />
        <Text>
          The current scene is titled {this.props.default.scene.name}.
        </Text>
        <Button onPress={() => {
            Actions.schedule()
        }} title="See Schedule" />
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => {
  return {
    user: state.user,
    default: state.default
  }
}, mapDispatchToProps)(Dashboard)
