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

  handleButtonClick = (id) => {
    console.log(id)
  }

  render() {
    return (
      <View style={styles.container}>
        {/*<Text>Keil Says<Text />*/}
        <Button title='RED'
                onPress={ () => this.handleButtonClick('red') } />
        <Button title='GREEN'
                onPress={ () => this.handleButtonClick('green') } />
        <Button title='BLUE'
                onPress={ () => this.handleButtonClick('blue') } />
        <Button title='YELLOW'
                onPress={ () => this.handleButtonClick('yellow') } />
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
