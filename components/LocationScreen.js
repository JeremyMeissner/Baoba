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
          <TitleBaoba text="Choisissez une durée de location"/>
          <View style={styles.container}>
            <TouchableOpacity style={styles.choice} activeOpacity={1}>
              <Text style={styles.text}>Jusqu'a Samedi</Text>
              <Text style={styles.description}>Récuperation a 13h</Text>
              <Image style={styles.image} source={require('../assets/clock.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.choice} activeOpacity={1}>
              <Text style={styles.text}>Jusqu'a Dimanche</Text>
              <Text style={styles.description}>Récuperation a 13h</Text>
              <Image style={styles.image} source={require('../assets/clock.png')}/>
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
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  choice: {
    alignItems: 'center',
    width: 180,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderColor: 'rgba(27, 21, 97, .75)',
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 12,
  },
  image: {
    width: 39,
    height: 39,
  },
})
export default PersonalizationPage;
