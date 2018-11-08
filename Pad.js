import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

class Pad extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <Image 
          source={ this.props.image }
          style={{width: 100, height: 100}} />
      </View>
      )
  }
}

// const styles = StyleSheet.create({
//   image: {
//     width: 25px;
//   }
// })

export default Pad;