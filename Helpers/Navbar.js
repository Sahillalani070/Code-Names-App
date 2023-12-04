import Game from '../pages/Game';
import NewGame from '../pages/GameScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
const Drawer = createDrawerNavigator();

const Nav = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="GameScreen" options={{ headerShown: false }}>
                <Drawer.Screen name="GameScreen" component={NewGame} options={{ headerShown: false }} />
                <Drawer.Screen name="Game" component={Game} options={{ headerShown: false }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
export default Nav;