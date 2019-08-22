import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

class Tasting extends React.Component {
  constructor(props) {
    super(props)
    this.state = { state: false, count: 0 }
  }

  _onPressTasting = () => {
    this.setState({
      state: true,
      count: this.state.count+1
    },
    () => { if (this.state.count > 20) {
      this.setState({
        count: 20,
      })
    }
  })
  }
  _onPressMinus = () => {
    this.setState({
      count: this.state.count-1
    },
    () => { if (this.state.count < 1) {
      this.setState({
        state: false,
      })
    }
  })
  }
  render() {
    let out;
    console.log(this.state.count);
    if (this.state.state) {
      out = <TouchableOpacity style={[styles.choice, styles.active, {backgroundColor: this.props.backgroundColor}]} onPress={this._onPressTasting} activeOpacity={1}>
        <Image style={styles.product_image}/>
        <View style={styles.container}>
        <TouchableOpacity style={[styles.button, {backgroundColor: this.props.color}]} onPress={this._onPressMinus} activeOpacity={1}>
          <Image style={styles.image}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: this.props.color}]} onPress={this._onPressTasting} activeOpacity={1}>
          <Image style={styles.image}/>
        </TouchableOpacity>
        </View>
        <View style={[styles.count, {backgroundColor: this.props.color}]}>
          <Text style={styles.text}>{this.state.count}</Text>
        </View>
      </TouchableOpacity>;
    }
    else {
      out = <TouchableOpacity style={[styles.choice, {backgroundColor: this.props.backgroundColor}, {borderColor: this.props.backgroundColor}]} onPress={this._onPressTasting} activeOpacity={1}>
        <Image style={styles.product_image}/>
        <View style={styles.container}>
        <TouchableOpacity style={[styles.button, {backgroundColor: this.props.color}]} onPress={this._onPressTasting} activeOpacity={1}>
          <Image style={styles.image}/>
        </TouchableOpacity>
        </View>
      </TouchableOpacity>;
    }
    return out;
  }
}
const styles = StyleSheet.create({
  choice: {
    alignItems: 'center',
    width: 80,
    paddingVertical: 12,
    backgroundColor: '#B7FAFF',
    borderRadius: 16,
    marginBottom: 24,
    borderWidth: 2,
  },
  product_image: {
    width: 28,
    height: 50,
    marginBottom: 13,
    borderRadius: 8,
    backgroundColor: 'grey',
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  container: {
    position: 'absolute',
    bottom: -16,
    flexDirection: 'row',
    paddingLeft: 6,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    borderRadius: 12,
    marginRight: 6,
  },
  count: {
    position: 'absolute',
    top: -4,
    right: -2,
    width: 17,
    height: 17,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 10,
    textAlign: 'center',
  },
  active: {
    borderColor: '#216CDD',
    shadowColor: "#000",
    shadowOffset: {
	     width: 0,
	      height: 3,
      },
    shadowOpacity: 0.15,
    shadowRadius: 15,
  }
})
export default Tasting
