import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import React from 'react';
import jsonData from "./dict.json";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-ico-material-design';
import { useNavigation } from "@react-navigation/native";

const Helper = () => {
    return (
        <View>
            <TouchableOpacity onPress={() => console.log("help")}>
                <Text>Road</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Helper;