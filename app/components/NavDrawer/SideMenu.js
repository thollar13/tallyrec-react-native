import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class SideMenu extends Component {
  render() {
    return (
      <View>
        <Text>Dashboard</Text>
        <Button
          onPress={() => {
            Actions.refresh({key: 'drawer', open: false })
            setTimeout(() => Actions.dashboard({title: 'Blood, Sweat & Beers'}), 1)
          }}
          title="Dashboard"
        />
        <Button
          onPress={() => {
            Actions.refresh({key: 'drawer', open: false })
            setTimeout(() => Actions.schedule({title: 'Blood, Sweat & Beers'}), 1)
          }}
          title="Schedule"
        />
        <Button
          onPress={() => {
            Actions.refresh({key: 'drawer', open: false })
            setTimeout(() => Actions.roster({title: 'Blood, Sweat & Beers'}), 1)
          }}
          title="Roster"
        />
      </View>
    )
  }
}

export default SideMenu