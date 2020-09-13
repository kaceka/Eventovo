import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

class TopBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.logo} source={require('./img/topbar_img.png')} />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    alignSelf: 'stretch',
    // height: 52,
    flexDirection: 'row', // row
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
    
  },
    logo: {
        width: 50,
        height: 50,
        resizeMode: "center",

    },
  
});

export default TopBar;
