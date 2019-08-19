import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import HeaderBaoba from './HeaderBaoba.js';
import SlidingUpPanel from 'rn-sliding-up-panel';

const {height} = Dimensions.get('window')

class SliderBottom extends React.Component {
  render() {
    return(
      /*
      <ScrollView style={styles.main_container} contentInset={{top: 300, left: 0, bottom: -250, right: 0}} vertical={true} showsVerticalScrollIndicator={false}>
        <View style={styles.slider}>
          <HeaderBaoba/>
          <TitleBaoba text="Quel saveur vous fait envie ?"/>
        </View>
      </ScrollView>
      */
      <View style={styles.main_container}>
        <SlidingUpPanel
        backdropOpacity={1}
        ref={c => (this._panel = c)}
        minimumVelocityThreshold={0.3}
        draggableRange={{top: height / this.props.top, bottom: this.props.bottom}}
        animatedValue={this._draggedValue}
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
    )
  }
}

const styles = StyleSheet.create({
  /*
  main_container: {
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    bottom: 0,
  },
  slider: {

  }
  */
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
})

export default SliderBottom;
