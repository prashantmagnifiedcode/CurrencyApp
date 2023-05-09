import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';

const Sketch=()=> {

    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <SketchCanvas
            style={{ flex: 1 }}
            strokeColor={'red'}
            strokeWidth={7}
          />
        </View>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
  },
});

export default Sketch