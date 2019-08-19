import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class TitleBaoba extends React.Component {
  render() {
    return(
      <View style={styles.header}>
        <Text style={styles.header_title}>{this.props.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginHorizontal: 24,
  },
  header_title: {
    marginTop: 24,
    fontSize: 24,
    fontWeight: '800',
    color: '#1B1561',
  },
})

export default TitleBaoba;
