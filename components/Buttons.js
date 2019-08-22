import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

class Buttons extends React.Component {
  render() {
    let out;

    if (this.props.before) {
      out = <View style={[styles.main_container, {marginTop: this.props.marginTop}]}>
      <TouchableOpacity style={styles.button} activeOpacity={1}>
        <Image style={[styles.image, {marginRight: 10}]}/>
        <Text style={styles.text}>Retour</Text>
      </TouchableOpacity>
      </View>;
    }
    if (this.props.after) {
      out = <View style={[styles.main_container, {marginTop: this.props.marginTop}]}>
      <TouchableOpacity style={styles.button} activeOpacity={1}>
        <Image style={[styles.image, {marginRight: 10}]}/>
        <Text style={styles.text}>Retour</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} activeOpacity={1}>
        <Text style={styles.text}>{this.props.text}</Text>
        <Image style={[styles.image, {marginLeft: 10}]}/>
      </TouchableOpacity>
      </View>;
    }
    return out;
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
