import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuContext } from 'react-native-popup-menu'

class TeamNavigation extends Component {

  render() {
    return (
      <MenuContext style={styles.appTeamMenuContent}>
        <Menu style={styles.appTeamMenu}>
          <MenuTrigger style={styles.appTeamMenuTrigger}>
            <Image
              source={require('../../images/team-menu-icon-arrow@2x.png')}
              style={styles.appTeamMenuIcon}
            />
          </MenuTrigger>
          <MenuOptions
            style={styles.appTeamMenuOptions}
            customStyles={optionsStyles}
          >
            <MenuOption
              onSelect={() => Actions.dashboard({title: 'Blood, Sweat & Beers'})}
              text="Dashboard"
              style={styles.appTeamMenuOption}
            />
            <MenuOption
              onSelect={() => Actions.schedule({title: 'Blood, Sweat & Beers'})}
              text='Schedule'
              style={styles.appTeamMenuOption}
            />
            <MenuOption
              onSelect={() => Actions.roster({title: 'Blood, Sweat & Beers'})}
              text='Roster'
              style={styles.appTeamMenuOption}
            />
          </MenuOptions>
        </Menu>
      </MenuContext>
    )
  }
}

export default TeamNavigation

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
    height: 25,
    marginTop: 8,
    resizeMode: 'contain',
  },
  appTeamMenuIcon: {
    width: 30,
    height: 25,
    marginRight: -10,
    marginTop: 3,
    resizeMode: 'contain',
  },
  appTeamMenu: {
    right: 15,
    backgroundColor: 'transparent'
  },
  appTeamMenuOptions: {
    width: 275,
    right: 100,
    top: 25,
    backgroundColor: '#FFF',
    padding: 5,
  },
  appTeamMenuTrigger: {
    top: 0,
    right: 0,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  appTeamMenuContent: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    padding: 4,
  },
  appTeamMenuOption: {
    backgroundColor: 'transparent',
  }
})
const optionsStyles = {
  optionsContainer: {
    backgroundColor: 'transparent',
  },
}