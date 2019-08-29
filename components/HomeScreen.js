import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Label from './Label.js';

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

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  /*  this._onPress = this._onPress.bind(this); */
  }
  state = {
		value: null,
	};

  _onPress(value, item) {
    if (value === item.key) {
      this.props.callback(item.key);
    }
    else {
      this.setState({ value: item.key, })
    }
  }
  render() {
		const { value } = this.state;
    return (
      <ScrollView style={styles.scroll_choice} contentContainerStyle={styles.choice_container} horizontal={true} showsHorizontalScrollIndicator={false}>
      {options.map(item => {
        return(
        <TouchableOpacity style={value === item.key
                        ? styles.main_container_open
                        : styles.main_container} key={item.key} onPress={() => {this._onPress(value, item)}} activeOpacity={1}>
          <Image style={styles.image} source={item.img}/>
          <Label text="20min"/>
          <Text style={styles.main_text}>{item.text}</Text>
          <Text style={styles.size_text}>{item.size}</Text>
          </TouchableOpacity>
        )
        })}
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
    marginRight: 24,
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 16,
    minWidth: 118,
  },
  main_container_open: {
    alignSelf: 'flex-start',
    backgroundColor: '#001535',
    marginRight: 24,
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 16,
    minWidth: 118,
  },
  image: {
    width: 63,
    height: 63,
    marginBottom: 8,
  },
  main_text: {
    marginTop: 8,
    marginBottom: 2,
    fontSize: 14,
    fontWeight: '700',
    color: '#1B1561',
  },
  size_text: {
    fontSize: 12,
    fontWeight: '600',
    color: '#BEBDC8',
  },
  scroll_choice: {
    position: 'absolute',
    bottom: 42,
  },
  choice_container: {
    paddingLeft: 24,
  }
})
export default HomeScreen;
