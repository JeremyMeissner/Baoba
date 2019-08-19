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
        <SliderBottom bottom={154} top={1.45}>
          <TitleBaoba text="Quel saveur vous fait envie ?"/>
          <View style={styles.container}>
            <TouchableOpacity style={[styles.choice, {backgroundColor: '#B7FAFF'}]} activeOpacity={1}>
              <Image style={styles.image}/>
              <Text style={styles.text}>Fraise</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.choice, {backgroundColor: '#FFE0A1'}]} activeOpacity={1}>
              <Image style={styles.image}/>
              <Text style={styles.text}>Pomme</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.choice, {backgroundColor: '#FCB3BB'}]} activeOpacity={1}>
              <Image style={styles.image}/>
              <Text style={styles.text}>Orange</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.choice, {backgroundColor: '#ABFFC2'}]} activeOpacity={1}>
              <Image style={styles.image}/>
              <Text style={styles.text}>Ananas</Text>
            </TouchableOpacity>
          </View>
          </SliderBottom>
          <Buttons before={true} after={true}/>
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
    backgroundColor: 'grey',
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
  },
})
export default PersonalizationPage;
