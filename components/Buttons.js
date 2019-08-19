import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

class Buttons extends React.Component {
  render() {
    let out;

    if (this.props.before) {
      out = <TouchableOpacity style={styles.button}>
        <Image style={[styles.image, {marginRight: 10}]}/>
        <Text style={styles.text}>Retour</Text>
      </TouchableOpacity>;
    }
    if (this.props.after) {
      out = <TouchableOpacity style={styles.button}>
        <Image style={[styles.image, {marginRight: 10}]}/>
        <Text style={styles.text}>Retour</Text>
      </TouchableOpacity>;
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Commander</Text>
        <Image style={[styles.image, {marginLeft: 10}]}/>
      </TouchableOpacity>;
    }
    return(
      <View style={styles.main_container}>
        {out}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  image: {
    height: 23,
    width: 23,
    backgroundColor: '#216CDD',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#216CDD',
  }
})

export default Buttons;
