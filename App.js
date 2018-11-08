import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';
import ron from './images/ron.png';
import melvin from './images/tube.png';
import sparkle from './images/sparkle.png';
import toes from './images/png-feet-1.png';



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
    this.setState({ [item]: !this.state[item] })
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
          'Dude, cool! Level Up!',
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
        <Text style={ styles.welcome}>Welcome to Keil Says!</Text>
        <Text style={ styles.itemName }>Level: { this.state.level }</Text>
        <View style={ styles.buttonContainer }>
          <TouchableOpacity onPress={ () => this.updatePlayersPattern('melvin') }>
            <Image
              style={ this.state.melvin ? styles.active : styles.button }
              source={ melvin }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => this.updatePlayersPattern('toes') }>
            <Image
              style={ this.state.toes ? styles.active : styles.button}
              source={ toes }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => this.updatePlayersPattern('ron') }>
            <Image
              style={ this.state.ron ? styles.active : styles.button}
              source={ ron }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => this.updatePlayersPattern('sparkle') }>
            <Image
              style={ this.state.sparkle ? styles.active : styles.button}
              source={ sparkle }
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    maxHeight: 500,
    flex: 1,
    flexWrap: 'wrap',
    // justifyContent: 'space-between',    
  },
  button: {
    width: 190,
    height: 190,
    // backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.15,
  },
  active: {
    width: 190,
    height: 190,
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.15,
  },
  itemName: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  welcome: {
    fontSize: 30
  }
})
