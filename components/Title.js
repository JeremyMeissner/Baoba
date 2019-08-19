import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Title extends React.Component {
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
    fontSize: 24,
    fontWeight: '700',
  },
})

export default Title;
