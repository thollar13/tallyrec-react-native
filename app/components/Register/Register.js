import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

class Register extends Component {
  render() {
    return (
      <View>
        <Text style={styles.h1}>Create Account</Text>
        <Text>Phone #:</Text>
        <TextInput style={styles.input} />
        <Text>Password:</Text>
        <TextInput style={styles.input} />
        <TouchableOpacity>
          <Text style={styles.button}>
            REGISTER
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.props.loginView}
          style={styles.link}
        >
          <Text>Already registered? Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Register.propTypes = {
  loginView: PropTypes.func.isRequired,
}

export default Register

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#333',
    color: 'white',
    height: 40,
    lineHeight: 40,
    marginTop: 5,
    textAlign: 'center',
    width: 275
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'center',
    height: 40,
    width: 275,
    marginBottom: 20,
  },
  link: {
    marginTop: 20,
    alignItems: 'center',
    width: 275,
  }
})