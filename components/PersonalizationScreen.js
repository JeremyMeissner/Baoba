import React from 'react';
import { Animated, View, Text, StyleSheet, Image, TouchableOpacity, Easing, Button, Dimensions } from 'react-native';
import Title from './Title.js';
import Buttons from './Buttons.js';
import TitleBaoba from './TitleBaoba.js';
import SliderBottom from './SliderBottom.js';

let {height} = Dimensions.get('window');
height = height + 250;

class PersonalizationPage extends React.Component {
  state = {
    heightAnim: new Animated.Value(-height),
  }
  _onPress(value) {
    this.props.callback(value);
  }
  componentDidMount() {
    Animated.timing(
      this.state.heightAnim,
      {
        toValue: -250,
        easing: Easing.out(Easing.quad),
        duration: 500,
      }
    ).start();
  }
  render() {
    let { heightAnim } = this.state;
    return(
        <SliderBottom height={heightAnim}>
          <TitleBaoba text="Quel saveur vous fait envie ?"/>
          <View style={styles.container}>
            <TouchableOpacity style={[styles.choice, {backgroundColor: '#B7FAFF'}]} onPress={() => {this._onPress("strawberry")}} activeOpacity={1}>
              <Image style={styles.image} source={require('../assets/strawberry.png')}/>
              <Text style={styles.text}>Fraise</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.choice, {backgroundColor: '#FFE0A1'}]} onPress={() => {this._onPress("apple")}} activeOpacity={1}>
              <Image style={styles.image} source={require('../assets/apple.png')}/>
              <Text style={styles.text}>Pomme</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.choice, {backgroundColor: '#FCB3BB'}]} onPress={() => {this._onPress("orange")}} activeOpacity={1}>
              <Image style={styles.image} source={require('../assets/orange.png')}/>
              <Text style={styles.text}>Orange</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.choice, {backgroundColor: '#ABFFC2'}]} onPress={() => {this._onPress("pineapple")}} activeOpacity={1}>
              <Image style={styles.image} source={require('../assets/pineapple.png')}/>
              <Text style={styles.text}>Ananas</Text>
            </TouchableOpacity>
          </View>
          <Buttons before={true} after={false} marginTop={8}/>
          </SliderBottom>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    paddingTop: 48,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  choice: {
    alignItems: 'center',
    width: 83,
    paddingVertical: 12,
    backgroundColor: '#B7FAFF',
    borderRadius: 16,
    marginBottom: 16,
  },
  image: {
    width: 39,
    height: 39,
    marginBottom: 12,
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
  },
})
export default PersonalizationPage;
