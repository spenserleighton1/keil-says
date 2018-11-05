import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super()
    this.state = {
      playersPattern: [],
      keilsPattern: [],
      level: 0,
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
        {text: 'Start', onPress: () => this.displayKeilsPattern() }
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
      level: 0 
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
          this.displayKeilsPattern()
          }
        },
      ],
      { cancelable: false }
    )
  }

  levelUp = () => {
    this.setState({
      playersPattern: [],
      level: this.state.level += 1
    })
  }

  displayKeilsPattern = () => {
    const { keilsPattern } = this.state
    let i = 0
    const interval = setInterval(() => {
      this.toggle(keilsPattern[i])
      i++
      if(i >= keilsPattern.length) {
        clearInterval(interval)
      }
    }, 750)
    this.setState({ playersPattern: [] })
  }

  toggle = (item) => {
    console.log(item)
    this.setState({ [item]: !this.state[item] })
    console.log(this.state[item])
    setTimeout(() => {
      this.setState({ [item]: !this.state[item] })
    }, 500)
  }

  updatePlayersPattern = async (item) => {
    await this.setState({
      playersPattern: [...this.state.playersPattern, item]
    })
    this.checkPlayersResponse()
  }


  checkPlayersResponse = () => {
    const { keilsPattern, playersPattern } = this.state
    const lastItem = playersPattern.length - 1
    if (playersPattern[lastItem] !== keilsPattern[lastItem]) {
      this.handleGameOver()
    } else {
      if (playersPattern.length === keilsPattern.length) {
        Alert.alert(
          'Dude, cool! keep playing?',
          'Press start to begin.',
          [
            {text: 'Start', onPress: () => {
              this.levelUp()
              this.randomItemGen()
              this.displayKeilsPattern()
            } }
          ]
        )
      }
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>Welcome to Keil Says!</Text>
        <Text style={ styles.itemName }>{ this.state.level }</Text>
        <Button title='Melvin DIPA'
                onPress={ () => this.updatePlayersPattern('melvin') } />
        <Button title='Sparkle the dog'
                onPress={ () => this.updatePlayersPattern('sparkle') } />
        <Button title='Captain Ron VHS tape'
                onPress={ () => this.updatePlayersPattern('ron') } />
        <Button title='Toes'
                onPress={ () => this.updatePlayersPattern('toes') } />
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
