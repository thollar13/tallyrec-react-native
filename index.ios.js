import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Authentication } from './app/containers'

export default class TallyRecReact extends Component {

  // componentWillMount() {
  //   function fetchData() {
  //     return (dispatch) => fetch('data_endpoint')
  //       .then(res => res.json())
  //       .then(json => dispatch({
  //           type: 'fetchData',
  //           data: json
  //       }))
  //   }
  // }

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
