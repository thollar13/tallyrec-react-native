import React, { Component } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions'

class AppContainer extends Component {

  logIn() {
    this.props.loginUser()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          App Container
          {this.props.loggedIn}
        </Text>
        <TouchableHighlight onPress={ () => {this.logIn() }}>
          <Text>Login</Text>
        </TouchableHighlight>
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