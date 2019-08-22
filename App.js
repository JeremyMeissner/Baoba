import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './components/HomePage.js';
import PersonalizationPage from './components/PersonalizationPage.js';
import LocationPage from './components/LocationPage.js';
import SurchargePage from './components/SurchargePage.js';
import SummaryPage from './components/SummaryPage.js';

export default class App extends React.Component {
  render() {
    return (
      <HomePage/>
    );
  }
}

const styles = StyleSheet.create({
});
