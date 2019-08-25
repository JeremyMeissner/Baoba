import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import Title from './Title.js';
import Buttons from './Buttons.js';
import TitleBaoba from './TitleBaoba.js';
import SliderBottom from './SliderBottom.js';



class PersonalizationPage extends React.Component {
  render() {
    return(
      <View style={styles.main_container}>
        <Title text="Personalisation"/>
        <SliderBottom navigation={this.props.navigation}>
          <TitleBaoba text="Quel saveur vous fait envie ?"/>
          <View style={styles.container}>
            <TouchableOpacity style={[styles.choice, {backgroundColor: '#B7FAFF'}]} onPress={() => this.props.navigation.navigate("Location")} activeOpacity={1}>
              <Image style={styles.image} source={require('../assets/strawberry.png')}/>
              <Text style={styles.text}>Fraise</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.choice, {backgroundColor: '#FFE0A1'}]} onPress={() => this.props.navigation.navigate("Location")} activeOpacity={1}>
              <Image style={styles.image} source={require('../assets/apple.png')}/>
              <Text style={styles.text}>Pomme</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.choice, {backgroundColor: '#FCB3BB'}]} onPress={() => this.props.navigation.navigate("Location")} activeOpacity={1}>
              <Image style={styles.image} source={require('../assets/orange.png')}/>
              <Text style={styles.text}>Orange</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.choice, {backgroundColor: '#ABFFC2'}]} onPress={() => this.props.navigation.navigate("Location")} activeOpacity={1}>
              <Image style={styles.image} source={require('../assets/pineapple.png')}/>
              <Text style={styles.text}>Ananas</Text>
            </TouchableOpacity>
          </View>
          <Buttons before={true} after={false} marginTop={8} navigation={this.props.navigation}/>
          </SliderBottom>
      </View>
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
