import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Label extends React.Component {
  render() {
    return(
      <View style={styles.main_container}>
        <Image style={styles.image}/>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    )
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
