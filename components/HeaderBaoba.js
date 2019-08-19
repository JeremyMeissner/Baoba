import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class HeaderBaoba extends React.Component {
  render() {
    return(
      <View style={styles.main_container}>
        <Image style={styles.image}/>
        <Text style={styles.text}>Black Baoba</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderBottomWidth: 2,
    borderColor: '#AEC7ED',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
  image: {
    backgroundColor: 'grey',
    width: 32,
    height: 32,
    borderRadius: 6,
    marginRight: 3,
  },
})

export default HeaderBaoba;
