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
        <SliderBottom navigation={this.props.navigation}>
          <TitleBaoba text="Une dégustation supplémentaire ?"/>
          <View style={styles.container}>
            <Tasting color="#6BCAFF" backgroundColor="#C1DEED" image={require('../assets/sprite.png')}/>
            <Tasting color="#FF701F" backgroundColor="#FFD8C2" image={require('../assets/cocacola.png')}/>
            <Tasting color="#6ECB77" backgroundColor="#C2DEC5" image={require('../assets/fanta.png')}/>
            </View>
            <View style={styles.container}>
            <Tasting color="#FF6A6A" backgroundColor="#EDC1C1" image={require('../assets/haribo.png')}/>
            <Tasting color="#A090FF" backgroundColor="#D1CCED" image={require('../assets/lays.png')}/>
            <Tasting color="#F4E76E" backgroundColor="#EAE6C2" image={require('../assets/cocacola.png')}/>
          </View>
          <Buttons before={true} after={true} text="Suivant" next="Summary" marginTop={14} navigation={this.props.navigation}/>
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
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
})
export default PersonalizationPage;
