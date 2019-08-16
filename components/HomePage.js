import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import Baoba from './Baoba.js';

const options = [
	{
		key: 'black',
		text: 'Black Baoba',
    size: 'L',
    style: 'black',
	},
	{
		key: 'gold',
		text: 'Gold Baoba',
    size: 'XL',
    style: 'gold',
	},
	{
		key: 'e',
		text: 'e-Baoba',
    size: 'L',
    style: 'e',
	},
];

class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <View>
          <View style={styles.header}>
            <Text style={styles.header_title}>Baoba</Text>
            <Image style={styles.header_image}/>
          </View>
          <TextInput style={styles.input} placeholder="Entrer votre adresse..."/>
        </View>
        <Baoba options={options}/>

      </View>
    )
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
export default HomePage
