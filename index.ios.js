import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux';
import { AppRegistry, StyleSheet } from 'react-native';
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import Drawer from 'react-native-drawer'

import { Authentication, Dashboard } from './app/containers'
import { NavDrawer } from './app/components'

const RouterWithRedux = connect()(Router);
import reducer from './app/reducers'


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

const App = () => (
  <Provider store={store}>
    <RouterWithRedux>
      <Scene key="root" navigationBarStyle={styles.loginNav} titleStyle={styles.navBarTitle}>
        <Scene key="authentication" component={Authentication} title="TALLYREC" />
      </Scene>
      <Scene key="drawer" component={NavDrawer} open={false}  navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle}>
        <Scene key="dashboard" component={Dashboard} title="Dashboard" renderBackButton={()=>(null)}/>
      </Scene>
    </RouterWithRedux>
  </Provider>
)

AppRegistry.registerComponent('TallyRecReact', () => App);


const styles = StyleSheet.create({
  navBar: {
    backgroundColor:'#FFFFFF',
  },
  navBarTitle:{
    color:'#000',
    letterSpacing: 1
  },
  barButtonTextStyle:{
    color:'#000'
  },
  loginNav: {
    display: 'none'
  },
  barButtonIconStyle:{
    tintColor:'rgb(255,255,255)'
  },
})