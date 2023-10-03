import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Home from './Home';
import Profile from './Profile';
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
      <Drawer.Navigator initialRouteName="OnBoarding" options={{ headerShown: false }}>
        <Drawer.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
        <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Drawer.Screen name="Game" component={Game} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
