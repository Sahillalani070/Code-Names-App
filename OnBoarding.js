import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from 'react';
import { StatusBar } from "expo-status-bar";

export default function OnBoarding() {
    return (<View>
        <StatusBar hidden />
        <View style={styles.button} >
            <Button title="Log" color="black" />
            <Button title="Log" color="black" />
            <Button title="Log" color="black" />
        </View>
    </View>
    );
}

const styles = StyleSheet.create({

    button: {
        width: "50%",
        height: "50%",
        color: 'black',
        paddingTop: '5%'
    }
});