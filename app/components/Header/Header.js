import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, Image, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from './styles'

class Header extends Component {
  render() {
    return (
      <View style={styles.appHeader}>
        <Text
          onPress={() => Actions.refresh({key: 'drawer', open: value => !value }) }
        >
          <Image
            source={require('../../images/menu-icon@2x.png')}
            style={styles.appHeaderMenuIcon}
          />
        </Text>
        <Text style={styles.appHeaderText}>
          Blood, Sweat & Beers
        </Text>
      </View>
    )
  }
}

export default Header
