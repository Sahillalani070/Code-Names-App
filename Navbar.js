import Game from './Game';
import OnBoarding from './OnBoarding';
import Helper from './GameHelper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
const Drawer = createDrawerNavigator();

const Nav = () => {
    return (
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
export default Nav;