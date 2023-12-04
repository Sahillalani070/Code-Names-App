import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import React from 'react';
import jsonData from "../dict.json";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-ico-material-design';
import { Boxes } from "../Helpers/GameHelper";
const Game = () => {
    return (
        <View>
            <StatusBar hidden />

            <Boxes />
        </View>
    );
}
export default Game;
