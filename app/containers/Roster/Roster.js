import React, { Component, PropTypes } from 'react'
import { Image, View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions'

import { Game } from '../../components'

class Roster extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount = () => {
    Actions.refresh({key: 'drawer', open: value => !value});
  }

  render() {
    return (
      <View>
        <Text style={{marginTop: 100}}>Roster</Text>
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
}, mapDispatchToProps)(Roster)
