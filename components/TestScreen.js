import React from 'react';
import {
    View, Dimensions, StyleSheet, Button
} from 'react-native'

const DeviceWidth = Math.round(Dimensions.get('window').width);

class TestScreen extends React.Component {
    render(){
    return(
<View style={styles.menuSquare}>
        <View >
          <View style={{width: DeviceWidth*0.25, height: DeviceWidth*0.25, marginBottom:10, marginLeft:10, backgroundColor: 'powderblue'}} />
          <View style={{width: DeviceWidth*0.25, height: DeviceWidth*0.25, marginBottom:10, marginLeft:10, backgroundColor: 'skyblue'}} />
          <View style={{width: DeviceWidth*0.25, height: DeviceWidth*0.25, marginBottom:10, marginLeft:10, backgroundColor: 'steelblue'}} />

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  menuSquare: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    
    
  }

});

export default TestScreen;
