import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    textAlign: 'center',
    width: 275
  },
  input: {
    height: 30,
    fontSize: 16,
    textAlign: 'center',
    width: 275,
  },
  inputBorder: {
    borderColor: 'black',
    borderBottomWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    marginBottom: 20,
  },
  link: {
    marginTop: 20,
    alignItems: 'center',
    width: 275,
  },
  error: {
    color: "red",
    textAlign: "center"
  }
})

export default styles