import React, { Component, PropTypes } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
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
      <View>
        <Text style={styles.h1}>Welcome to TallyRec</Text>

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

        <Text style={styles.error}>
          {this.state.error}
        </Text>

        <TouchableOpacity
          onPress={ (credentials) => {this.login(credentials)} }
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
  login: PropTypes.func,
  showRegisterView: PropTypes.func.isRequired,
}

export default Login