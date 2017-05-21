import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions'

class AppContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>App Container</Text>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(() => {
  return {}
}, mapDispatchToProps)(AppContainer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
})