import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super()
    this.state = {
      playersPattern: [],
      keilsPattern: [],
      itemIndex: 0,
      melvin: false,
      sparkle: false,
      ron: false,
      toes: false
    }
  }

  componentDidMount() {
    this.randomItemGen()
    Alert.alert(
      'Ready to play?',
      'Press start to begin.',
      [
        {text: 'Start', onPress: () => this.displaykeilsPattern() }
      ]
    )
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
      keilsPattern: [...this.state.keilsPattern, item]
    })
  }

  resetGame = () => {
    this.setState({ 
      playersPattern: [],
      keilsPattern: [],
      itemIndex: 0 
    })
  }

  handleGameOver = () => {
    this.resetGame()
    Alert.alert(
      'Game OVER, Tubehead',
      'Start over',
      [
        {text: 'Restart', onPress: () => {
          this.randomItemGen()
          this.displaykeilsPattern()
          }
        },
      ],
      { cancelable: false }
    )
  }

  checkItems = (item) => {
    let { keilsPattern, itemIndex } = this.state

    if (keilsPattern[itemIndex] === item) {
      this.setState({ itemIndex: itemIndex += 1})
      this.randomItemGen()
      this.displaykeilsPattern()
    } else {
      this.setState({ keilsPattern: [] })
      this.handleGameOver()
    }
  }

  updatePlayersPattern = (item) => {
    this.setState({
      playersPattern: [...this.state.playersPattern, item]
    })
  }

  handleButtonClick = (item) => {
    this.checkItems(item)
  }

  displaykeilsPattern = () => {
    this.state.keilsPattern.forEach((currentItem, index) => {
      setTimeout(() => {
        this.setState({ currentItem })
      }, index * 1000);    
    });
  }


  render() {
    console.log(this.state.keilsPattern, this.state.itemIndex)

    return (
      <View style={ styles.container }>
        <Text>Welcome to Keil Says!</Text>
        <Text style={ styles.itemName }>{ this.state.itemIndex, this.state.currentItem }</Text>
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
  itemName: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
