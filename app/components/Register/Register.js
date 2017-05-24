import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './styles'

class Register extends Component {
  render() {
    return (
      <View>
        <Text style={styles.h1}>Create Account</Text>

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
            REGISTER
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.props.showLoginView}
          style={styles.link}
        >
          <Text>Already registered? Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Register.propTypes = {
  showLoginView: PropTypes.func.isRequired,
}

export default Register
