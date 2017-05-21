import React, { Component } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions'

import { Authentication, Dashboard } from '../'

class AppContainer extends Component {

  render() {
    return (
      <View style={styles.container}>
        {this.props.loggedIn ?
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
    loggedIn: state.loginUser
  }
}, mapDispatchToProps)(AppContainer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
})