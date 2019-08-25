import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Information extends React.Component {
  render() {
    return(
      <View style={styles.main_container}>
        <Image style={styles.image}/>
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.description}>{this.props.description}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 24,
    paddingRight: 24,
    paddingLeft: 24,
  },
  container: {
    justifyContent: 'flex-start',
    width: 0,
    flexGrow: 1,
  },
  image: {
    width: 28,
    height: 28,
    borderRadius: 10,
    backgroundColor: 'grey',
    marginRight: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },
  description: {
    fontSize: 18,
    fontWeight: '500',
  },
})

export default Information;
