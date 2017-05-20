/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Authentication } from './app/containers'

export default class TallyRecReact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Authentication />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

AppRegistry.registerComponent('TallyRecReact', () => TallyRecReact);
