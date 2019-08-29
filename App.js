import React from 'react';
import { Animated, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import HomeScreen from './components/HomeScreen.js'
import PersonalizationScreen from './components/PersonalizationScreen.js'
import LocationScreen from './components/LocationScreen.js'
import SurchargeScreen from './components/SurchargeScreen.js'
import SummaryScreen from './components/SummaryScreen.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {buttonClicked: false, out:null};
    this._onPress = this._onPress.bind(this);
  }

  _onPress = (key) => {
    this.setState({buttonClicked: true});
    this.setState({out:key});
  }
  _Press = () => {
    console.log("clicked");
    this.setState({out:"Personalization"});
  }
  _Render = () => {
    switch (this.state.out) {
      case "black": return <PersonalizationScreen callback={this._componentPress} />
      case "gold": return <LocationScreen/>
      case "e": return <PersonalizationScreen/>
    }
  }
  _componentPress = (value) => {
    console.log(value)
    this.setState({out:"gold"}, () => this._Render());
  }
  render() {
    return (
      <View style={styles.main_container}>
        <View>
          <View style={styles.header}>
            <Text style={styles.header_title} onPress={this._Press}>Baoba</Text>
            <Image style={styles.header_image}/>
          </View>
          <TextInput style={styles.input} placeholder="Entrer votre adresse..."/>
        </View>


        <HomeScreen callback={this._onPress}/>

        {this._Render()}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    paddingTop: 48,
    paddingBottom: 42,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginHorizontal: 24,
  },
  header_title: {
    fontSize: 36,
    fontWeight: '700',
  },
  header_image: {
    height: 32,
    width: 32,
    borderRadius: 12,
    backgroundColor: 'grey',
  },
  input: {
    fontSize: 14,
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
    borderRadius: 9,
    marginHorizontal: 24,
  },
});
