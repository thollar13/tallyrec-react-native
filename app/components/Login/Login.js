import React, { Component, PropTypes } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './styles'

class Login extends Component {
  render() {
    return (
      <View>
        <Text style={styles.h1}>Welcome to TallyRec</Text>
        <Text>Phone #:</Text>
        <TextInput
          style={styles.input}
        />
        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={ () => {this.props.loginUser()} }
        >
          <Text style={styles.button}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.props.showRegisterView}
          style={styles.link}
        >
          <Text>Register Now</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func,
  showRegisterView: PropTypes.func.isRequired,
}

export default Login