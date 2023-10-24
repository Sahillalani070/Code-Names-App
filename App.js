import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Game from './Game';
import OnBoarding from './OnBoarding';
import Helper from './GameHelper';
import { Amplify } from 'aws-amplify';
import config from "./src/aws-exports";
import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';


Amplify.configure(config);

const Drawer = createDrawerNavigator();
function App() {
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
        <Drawer.Screen name="GameHelper" component={Helper} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
export default withAuthenticator(App);