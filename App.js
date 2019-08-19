import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './components/HomePage.js';
import PersonalizationPage from './components/PersonalizationPage.js';

export default class App extends React.Component {
  render() {
    return (
      <PersonalizationPage/>
    );
  }
}

const styles = StyleSheet.create({
});
