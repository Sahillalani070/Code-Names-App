//1086593982563-5vesa8re92kq0aje5qpf39ssboib9mqh.apps.googleusercontent.com

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Game from './Game';
import OnBoarding from './OnBoarding';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" /> */}
    // </View>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Buttontest" options={{ headerShown: false }}>
        {/* <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} /> */}
        <Drawer.Screen name="Buttontest" component={OnBoarding} options={{ headerShown: false }} />
        <Drawer.Screen name="Game" component={Game} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
