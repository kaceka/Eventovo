import React from 'react';
import {
    View, Dimensions, StyleSheet, Button
} from 'react-native'
import { withNavigation } from 'react-navigation';

const DeviceWidth = Math.round(Dimensions.get('window').width);

class MainMenu extends React.Component {
    render(){
    return(
<View style={styles.menuSquare}>
        <View >
          <View style={{width: DeviceWidth*0.25, height: DeviceWidth*0.25, marginBottom:10, marginLeft:10, backgroundColor: 'powderblue'}}>
            <Button
            title = 'Go to test'
            onPress={() => this.props.navigation.push('Test')}/>
          </View> 
          <View style={{width: DeviceWidth*0.25, height: DeviceWidth*0.25, marginBottom:10, marginLeft:10, backgroundColor: 'skyblue'}} />
          <View style={{width: DeviceWidth*0.25, height: DeviceWidth*0.25, marginBottom:10, marginLeft:10, backgroundColor: 'steelblue'}} />

        </View>
        <View>
          <View style={{width: DeviceWidth*0.25, height: DeviceWidth*0.25, marginBottom:10, marginLeft:10, backgroundColor: 'powderblue'}} />
          <View style={{width: DeviceWidth*0.25, height: DeviceWidth*0.25, marginBottom:10, marginLeft:10, backgroundColor: 'skyblue'}} />
          <View style={{width: DeviceWidth*0.25, height: DeviceWidth*0.25, marginBottom:10, marginLeft:10, backgroundColor: 'steelblue'}} />
        </View>
        <View>
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

export default MainMenu;

// import React from 'react';
// import {StyleSheet,
//     View,
//     FlatList,
//     ActivityIndicator,
//     Image,
//     TouchableOpacity,} from 'react-native'


// class MainMenu extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//           dataSource: {},
//         };
//     }
//       componentDidMount() {
//         var that = this;
//         let items = Array.apply(null, Array(9)).map((v, i) => {
//           return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
//         });
//         that.setState({
//           //Setting the data source
//           dataSource: items,
//         });
//       }

//     render(){
//     return(
// <View style={styles.MainContainer}>
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({ item }) => (
//             <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
//               <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
//             </View>
//           )}
//           //Setting the number of column
//           numColumns={2}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     MainContainer: {
//       justifyContent: 'center',
//       flex: 1,
//       paddingTop: 30,
//     },
  
//     imageThumbnail: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: 100,
//     },
//   });

// export default MainMenu;