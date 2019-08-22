import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import Title from './Title.js';
import Buttons from './Buttons.js';
import TitleBaoba from './TitleBaoba.js';
import SliderBottom from './SliderBottom.js';
import Tasting from './Tasting.js';



class PersonalizationPage extends React.Component {
  render() {
    return(
      <View style={styles.main_container}>
        <Title text="Supplément"/>
        <SliderBottom>
          <TitleBaoba text="Une dégustation supplémentaire ?"/>
          <View style={styles.container}>
            <Tasting color="#6BCAFF" backgroundColor="#C1DEED"/>
            <Tasting color="#FF701F" backgroundColor="#FFD8C2"/>
            <Tasting color="#6ECB77" backgroundColor="#C2DEC5"/>
            <Tasting color="#FF6A6A" backgroundColor="#EDC1C1"/>
            <Tasting color="#A090FF" backgroundColor="#D1CCED"/>
            <Tasting color="#F4E76E" backgroundColor="#EAE6C2"/>
          </View>
          <Buttons before={true} after={true} text="Suivant" marginTop={14}/>
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
})
export default PersonalizationPage;
