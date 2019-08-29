import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Title from './Title.js';
import Buttons from './Buttons.js';
import TitleBaoba from './TitleBaoba.js';
import SliderBottom from './SliderBottom.js';
import Tasting from './Tasting.js';
import Information from './Information.js';

class SummaryPage extends React.Component {
  render() {
    return(
      <View style={styles.main_container}>
        <Title text="Récapitulatif"/>
        <SliderBottom big={true}>
          <Information title="Adresse" description="25 Avenue Michel Caron, 1217 Meyrin"/>
          <Information title="Livraison prévue à" description="19h13"/>
          <Information title="Récuperation prévue" description="Dimanche vers 13h"/>
          <Information title="Goût" description="Pomme"/>
          <Information title="Suppléments" description="2 Coca Cola"/>
          <Information title="Prix" description="83.-"/>
          <Buttons before={true} after={true} text="Commander" marginTop={24}/>
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
})

export default SummaryPage;
