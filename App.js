/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';



type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super()
    this.state = {
      keilsMemory: []
    }
  }

  randomItemGen = () => {
    let keilsThings = {
        1: 'Melvin DIPA',
        2: 'Sparkle the dog',
        3: 'Captain Ron VHS tape',
        4: 'Toes'
      },
    let itemIndex = Math.round(Math.random() * 4)
    let item = keilsThings[itemIndex]
  }

  handleButtonClick = (id) => {
    console.log(id)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Keil Says!</Text>
        <Button title='Melvin DIPA'
                onPress={ () => this.handleButtonClick('Melvin') } />
        <Button title='Sparkle the dog'
                onPress={ () => this.handleButtonClick('Sparkle') } />
        <Button title='Captain Ron VHS tape'
                onPress={ () => this.handleButtonClick('Captain Ron') } />
        <Button title='Toes'
                onPress={ () => this.handleButtonClick('Toes') } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
