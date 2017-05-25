import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './styles'

class Register extends Component {
  render() {
    return (
      <View style={styles.loginWidth}>
        <View style={styles.inputBorder}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
          />
        </View>

        <View style={styles.inputBorder}>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>

        <Text style={styles.error} />

        <TouchableOpacity>
          <Text style={styles.button}>
            Register
          </Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>Already have an account?</Text>
        <TouchableOpacity
          onPress={this.props.showLoginView}
          style={styles.registerLink}
        >
          <Text style={styles.registerLinkText}>Login Now</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Register.propTypes = {
  showLoginView: PropTypes.func.isRequired,
}

export default Register
