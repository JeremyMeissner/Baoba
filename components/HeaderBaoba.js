import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Label from './Label.js';
import TitleBaoba from './TitleBaoba.js';

class HeaderBaoba extends React.Component {
  render() {
    let out;
    if (this.props.big) {
      out = <View style={styles.container}>
      <Image style={styles.baoba} source={require('../assets/baoba-black.png')}/>
      <TouchableOpacity activeOpacity={1}>
      <Image style={[styles.image, {marginBottom: 16}]} source={require('../assets/close2.png')} />
      </TouchableOpacity>
      <Label big={true} text="20min"/>
      <Text style={styles.title}>Black Baoba</Text>
      <Text style={styles.size}>L</Text>
      </View>
    }
    else {
      out = <View style={styles.main_container}>
      <TouchableOpacity activeOpacity={1}>
      <Image style={styles.image} source={require('../assets/close2.png')}/>
      </TouchableOpacity>
        <Text style={styles.text}>Black Baoba</Text>
      </View>
    }
    return out;
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
  container: {
    flexDirection: 'column',
    paddingTop: 12,
    paddingBottom: 18,
    paddingHorizontal: 24,
    borderBottomWidth: 2,
    borderColor: '#AEC7ED',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1B1561',
    marginTop: 16,
    marginBottom: 6,
  },
  size: {
    fontSize: 18,
    fontWeight: '700',
    color: '#BEBDC8',
  },
  image: {
    width: 32,
    height: 32,
    marginRight: 3,
  },
  baoba: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: 24,
    top: 36,
  },
})

export default HeaderBaoba;
