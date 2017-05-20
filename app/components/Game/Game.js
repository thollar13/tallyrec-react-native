import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

class Game extends Component {
  render() {
    return (
      <View style={styles.gameCard}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 137.5, height: 30, backgroundColor: '#333'}}>
            <Text style={{color: '#fff', padding: 5, textAlign: 'left'}}>Next Game</Text>
          </View>
          <View style={{width: 137.5, height: 30, backgroundColor: '#333'}}>
            <Text style={{color: '#fff', padding: 5, textAlign: 'right'}}>4/27 @ 4:00</Text>
          </View>
        </View>
        <View style={styles.gameContent}>
          <Text>Blood, Sweat, & Beers</Text>
        </View>
        <View style={styles.gameContent}>
          <Text>Tom Brown Park</Text>
          <Text>Field #5</Text>
        </View>
      </View>
    )
  }
}

Game.propTypes = {
}

export default Game

const styles = StyleSheet.create({
  gameCard: {
    borderColor: '#333',
    borderWidth: 1,
    height: 150,
    width: 275,
  },
  gameContent: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 25,
  }
})