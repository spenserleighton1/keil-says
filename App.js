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
      keilsMemory: [],
      keilsList: []
    }
  }

  componentDidMount() {
    this.randomItemGen()
  }

  randomItemGen = () => {
    let keilsThings = {
        1: 'melvin',
        2: 'sparkle',
        3: 'ron',
        4: 'toes'
    }

    let itemIndex = Math.floor(Math.random() * 4) + 1 ;
    let item = keilsThings[itemIndex];

    this.setState({
      keilsList: [...this.state.keilsList, item]
    })
  }

  checkItems = (item) => {
    if (this.state.keilsList[this.state.keilsList.length -1] === item) {
      console.log('hell yeah')
      this.randomItemGen()
    } else {
      console.log('hell no, game over')
      this.setState({ keilsList: [] })
    }
  }

  handleButtonClick = (item) => {
    this.checkItems(item)
    console.log(this.state.keilsList)
    //if the item matches the index in array continue to next index else FAIL

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Keil Says!</Text>
        <Button title='Melvin DIPA'
                onPress={ () => this.handleButtonClick('melvin') } />
        <Button title='Sparkle the dog'
                onPress={ () => this.handleButtonClick('sparkle') } />
        <Button title='Captain Ron VHS tape'
                onPress={ () => this.handleButtonClick('ron') } />
        <Button title='Toes'
                onPress={ () => this.handleButtonClick('toes') } />
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
