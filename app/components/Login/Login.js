import React, { Component, PropTypes } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      phoneNumberValid: false,
      passwordValid: false,
      phoneNumber: '',
      password: '',
      error: '',
    }
  }

  /// error will be set via Redux in ComponentDidMount
  /// if needed for incorrect password or phone

  validatePhoneNumber = (number) => {
    let validation = (number.length > 8) ? true : false
    this.setState({
      phoneNumberValid: validation,
      phoneNumber: number,
    })
  }

  validatePassword = (text) => {
    let validation = (text.length > 7) ? true : false
    this.setState({
      passwordValid: validation,
      password: text,
    })
  }

  login = () => {
    if (this.state.phoneNumberValid && this.state.passwordValid) {
      this.props.login(
        this.state.phoneNumber,
        this.state.password
      )
    } else if (!this.state.phoneNumberValid) {
      this.setState({
        error: 'You must enter a valid phone number'
      })
    } else {
      this.setState({
        error: 'Password was incorrect'
      })
    }
  }

  render() {
    return (
      <View style={styles.loginWidth}>

        <Text style={styles.error}>
          {this.props.loginMessage || this.state.error || " "}
        </Text>

        <View style={styles.inputBorder}>
          <TextInput
            onChangeText={(number) => this.validatePhoneNumber(number)}
            autoCapitalize = 'none'
            placeholder="Phone Number"
            style={styles.input}
          />
        </View>

        <View style={styles.inputBorder}>
          <TextInput
            onChangeText={(text) => this.validatePassword(text)}
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>

        <TouchableOpacity
          onPress={ (credentials) => {this.login(credentials)} }
        >
          <Text style={styles.button}>
            Sign In
          </Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={this.props.showRegisterView}
          style={styles.registerLink}
        >
          <Text style={styles.registerLinkText}>Register Now</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Login.propTypes = {
  login: PropTypes.func,
  loginMessage: PropTypes.string.isRequired,
  showRegisterView: PropTypes.func.isRequired,
}

export default Login