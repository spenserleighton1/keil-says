import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super()
    this.state = {
      currentItem: '',
      keilsList: [],
      itemIndex: 0
    }
  }

  componentDidMount() {
    this.randomItemGen()
    Alert.alert(
      'Ready to play?',
      'Press start to begin.',
      [
        {text: 'Start', onPress: () => this.displayKeilsList() }
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
      keilsList: [...this.state.keilsList, item]
    })
  }

  handleGameOver = () => {
    this.setState({ 
      currentItem: '',
      itemIndex: 0 
    })
    Alert.alert(
      'Game OVER, Tubehead',
      'Start over',
      [
        {text: 'Restart', onPress: () => {
          this.randomItemGen()
          this.displayKeilsList()
          }
        },
      ],
      { cancelable: false }
    )
  }

  checkItems = (item) => {
    let { keilsList, itemIndex } = this.state

    if (keilsList[itemIndex] === item) {
      this.randomItemGen()
      this.setState({ itemIndex: 1})
      this.displayKeilsList(keilsList)
    } else {
      this.setState({ keilsList: [] })
      this.handleGameOver()
    }
  }

  handleButtonClick = (item) => {
    this.checkItems(item)
  }

  displayKeilsList = () => {
    this.state.keilsList.forEach((currentItem, index) => {
      this.setState({ currentItem: '' })
      setTimeout(() => {
        console.log(index, currentItem)
        this.setState({ currentItem })
      }, index * 1000);    
    });
  }


  render() {
    return (
      <View style={ styles.container }>
        <Text>Welcome to Keil Says!</Text>
        <Text style={ styles.itemName }>{ this.state.currentItem }</Text>
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
