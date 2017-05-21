import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './app/reducers'

import { Authentication } from './app/containers'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
  return createStore(reducer, initialState, enhancer)
}

const store = configureStore({})

export default class TallyRecReact extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Authentication />
        <Text>
        </Text>
      </View>
    );
  }
}

const App = () => (
  <Provider store={store}>
    <TallyRecReact />
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

AppRegistry.registerComponent('TallyRecReact', () => App);
