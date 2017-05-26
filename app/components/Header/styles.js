import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appHeader: {
    height: 50,
    backgroundColor: '#333',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  appHeaderText: {
    color: '#FFF',
    fontWeight: '700',
  },
  appHeaderMenuIcon: {
    width: 50,
    height: 15,
    marginTop: 4,
    resizeMode: 'contain',
  }
})

export default styles