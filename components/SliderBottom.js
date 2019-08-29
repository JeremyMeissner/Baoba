import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Animated } from 'react-native';
import HeaderBaoba from './HeaderBaoba.js';
import SlidingUpPanel from 'rn-sliding-up-panel';

let {height} = Dimensions.get('window');
height = height + 250;

class SliderBottom extends React.Component {

  render() {
    return(
      <Animated.ScrollView style={[styles.main_container, {bottom: this.props.height}]} vertical={true} showsVerticalScrollIndicator={false}>
        <View style={styles.slider}>
          <HeaderBaoba big={this.props.big}/>
          {this.props.children}
        </View>
      </Animated.ScrollView>

/*
      <View style={styles.main_container}>
        <SlidingUpPanel
        backdropOpacity={1}
        ref={c => (this._panel = c)}
        minimumVelocityThreshold={0.3}
        draggableRange={{top: height / this.props.top, bottom: this.props.bottom}}
        showBackdrop={false}>
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <HeaderBaoba/>
            </View>
            <View>
            {this.props.children}
            </View>
            </View>
        </SlidingUpPanel>
      </View>
      */
    )
  }
}

const styles = StyleSheet.create({

  main_container: {
    position: 'absolute',
    maxHeight: height,
    left: 0,
    right: 0,
    bottom: -250,
    overflow: 'visible',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    width: '100%',
  },
  slider: {
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
    width: '100%',
    paddingBottom: 268,
  }

  /*
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  panel: {
    flex: 1,
    backgroundColor: '#ffffff',
    position: 'relative',
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
  },
  panelHeader: {
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    backgroundColor: '#ffffff',
  },
  */
})

export default SliderBottom;
