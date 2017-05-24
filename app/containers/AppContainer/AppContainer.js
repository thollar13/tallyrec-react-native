import React, { Component } from 'react'
import { Text, TouchableHighlight, View } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions'

import { Authentication, Dashboard } from '../'

class AppContainer extends Component {

  render() {
    return (
      <View>
        {!this.props.loggedIn ?
          <Dashboard /> :
          <Authentication />
        }
      </View>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect((state) => {
  return {
    loggedIn: state.user.loggedIn
  }
}, mapDispatchToProps)(AppContainer)
