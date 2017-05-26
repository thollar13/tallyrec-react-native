import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Image, Text } from 'react-native';
import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import Drawer from 'react-native-drawer'

import { Authentication, Dashboard, Schedule, Roster } from './app/containers'
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

MenuIcon = () => {
  return (
    <Text onPress={() => Actions.refresh({key: 'drawer', open: value => !value }) }>
      <Image
        source={require('./app/images/menu-icon@2x.png')}
        style={styles.appHeaderMenuIcon}
      />
    </Text>
  )
}

const App = () => (
  <Provider store={store}>
    <RouterWithRedux>
      <Scene
        key="root"
        navigationBarStyle={styles.loginNav}
        titleStyle={styles.navBarTitle}
      >
        <Scene
          key="authentication"
          component={Authentication}
          title="TALLYREC"
          hideNavBar={true}
        />
      </Scene>
      <Scene
        key="drawer"
        component={NavDrawer}
        open={false}
        tabs={true}
        type={ActionConst.RESET}
      >
        <Scene key="Scene" tabs={true}>
          <Scene
            key="dashboard"
            component={Dashboard}
            schema="sub"
            title=""
            currentView=""
            navigationBarStyle={{backgroundColor: '#333'}}
            titleStyle={{color: '#FFF'}}
            renderLeftButton={MenuIcon}
          />
          <Scene
            key="schedule"
            component={Schedule}
            title=""
            currentView=""
            navigationBarStyle={{backgroundColor: '#333'}}
            titleStyle={{color: '#FFF'}}
            renderLeftButton={MenuIcon}
          />
          <Scene
            key="roster"
            component={Roster}
            title=""
            currentView=""
            navigationBarStyle={{backgroundColor: '#333'}}
            titleStyle={{color: '#FFF'}}
            renderLeftButton={MenuIcon}
          />
        </Scene>
      </Scene>
    </RouterWithRedux>
  </Provider>
)

AppRegistry.registerComponent('TallyRecReact', () => App);


const styles = StyleSheet.create({
  navBar: {
    backgroundColor:'#000',
  },
  navBarTitle:{
    color:'#FFF',
    backgroundColor:'#000',
    letterSpacing: 1,
    display: 'flex',
  },
  barButtonTextStyle:{
    color:'#000',
    backgroundColor:'#000',
  },
  loginNav: {
    display: 'none'
  },
  barButtonIconStyle:{
    tintColor:'rgb(255,255,255)',
    backgroundColor:'#000',
  },
  appHeaderMenuIcon: {
    width: 50,
    height: 15,
    marginTop: 8,
    resizeMode: 'contain',
  }
})