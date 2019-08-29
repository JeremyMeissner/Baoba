import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import Baoba from './Baoba.js';

const options = [
	{
		key: 'black',
		text: 'Black Baoba',
    size: 'L',
    style: 'black',
		img: require('../assets/baoba-black.png'),
	},
	{
		key: 'gold',
		text: 'Gold Baoba',
    size: 'XL',
    style: 'gold',
		img: require('../assets/baoba-gold.png'),
	},
	{
		key: 'e',
		text: 'e-Baoba',
    size: 'L',
    style: 'e',
		img: require('../assets/baoba-e.png'),
	},
];

class HomePage extends React.Component {
  render() {
    return (
      <Baoba navigation={this.props.navigation} options={options}/>
    )
  }
}
const styles = StyleSheet.create({
  
});
export default HomePage
