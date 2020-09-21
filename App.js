import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import TestButton from './components/TestButton'
import TopBar from './components/TopBar';

import Constants from 'expo-constants';
import MainMenu from './components/MainMenu';
import TestScreen from './components/TestScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./components/img/topbar_img.png')}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
    <View style={styles.statusBar} />
      <Stack.Navigator
            screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',

        },
      }}>
      <Stack.Screen
        name="Home"
        component={MainMenu}
        options={{ headerTitle: props => <LogoTitle {...props} /> }}
      />
        <Stack.Screen name="Test" component={TestScreen} />
      </Stack.Navigator>
      
      <TestButton></TestButton>
      <StatusBar style="auto" />
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  statusBar: {
    backgroundColor: '#d2227e',
    height: Constants.statusBarHeight
  },

  container: {
    flex: 1,
    backgroundColor: '#254565',
    //alignItems: 'center',
    // justifyContent: 'center',

  },
});
