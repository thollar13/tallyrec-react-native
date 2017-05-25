import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loginWidth: {
    width: 300,
  },
  button: {
    backgroundColor: '#FFF',
    color: '#333',
    fontWeight: '700',
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
    borderRadius: 5
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    alignItems: 'center',
    justifyContent: 'center',
  },
  tallyRecLogo: {
    width: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  input: {
    height: 30,
    fontSize: 16,
    justifyContent: 'center',
    marginBottom: 5,
    color: '#FFF',
  },
  inputBorder: {
    borderColor: '#FFF',
    borderBottomWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    marginBottom: 20,
  },
  registerText: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 25,
    backgroundColor: 'transparent',
  },
  registerLink: {
    marginTop: 10,
    alignItems: 'center',
  },
  registerLinkText: {
    color: '#FFF',
    backgroundColor: 'transparent',
    fontWeight: '700',
  },
  error: {
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
    backgroundColor: 'transparent',
  }
})

export default styles