import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Label extends React.Component {
  render() {
    let out;
    if (this.props.big) {
      out = <View style={[styles.main_container, {paddingHorizontal: 8, paddingVertical: 3}]}>
        <Image style={[styles.image, {height: 10, width: 10}]}/>
        <Text style={[styles.text, {fontSize: 12}]}>{this.props.text}</Text>
      </View>
    }
    else {
      out = <View style={styles.main_container}>
        <Image style={styles.image}/>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    }
    return out;
  }
}
const styles = StyleSheet.create({
  main_container: {
    borderRadius: 500,
    backgroundColor: "#C0CCE9",
    paddingVertical: 2,
    paddingHorizontal: 6,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 7,
    width: 7,
    backgroundColor: '#6890F1',
    marginRight: 4,
    borderRadius: 3.5,
  },
  text: {
    fontSize: 8,
    color: '#6890F1',
  }
})
export default Label
