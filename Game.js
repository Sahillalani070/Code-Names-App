import { StyleSheet, Text, View, Pressable } from "react-native";
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import jsonData from "./dict.json";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-ico-material-design';

// extracting data
const customData = require('./')
const num = [1, 2, 3, 4, 5, 6];
const DataList = jsonData.words;
var value = IndicestoWords();

// Generate Random indicies
function RandomIndices() {
    var x = Math.floor(Math.random() * DataList.length)
    var list1 = [x];
    for (var i = 1; i < 25; i++) {
        while (list1.includes(x)) {
            x = Math.floor(Math.random() * DataList.length)
        }
        list1.push(x);
        console.log(x);
    }
    return (list1);
}

function IndicestoWords() {
    var listi = RandomIndices();
    var listw = [""];
    listw.pop();
    var n = 0;
    while (n < 25) {
        listw.push(DataList[listi[n]]);
        n++;
    }
    console.log(listw)
    return listw;
}
export default function Home() {
    return (
        <View>
            <StatusBar hidden />
            <SafeAreaView style={styles.container}>
                <Boxes />
            </SafeAreaView>
        </View>
    );
}
const Boxes = () => {
    return (
        <View style={styles.boxContainer}>
            {
                value.map((item) => (
                    <View style={styles.box}>
                        <View style={styles.inner}>
                            <Pressable style={styles.IconBehave}>
                                <Icon name="thumb-up-button" color='#448aff' />
                            </Pressable>
                            <Text style={styles.styletext}>{item}</Text>
                        </View>
                    </View>
                )
                )}
        </View >
    )
}
const styles = StyleSheet.create({
    boxContainer: {
        width: '100%',
        height: '100%',
        //backgroundColor: 'red',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    box: {
        width: '20%',
        height: '20%',
        padding: 5,
        //backgroundColor: 'green'
    },
    inner: {
        flex: 1,
        backgroundColor: '#c8c8c8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    IconBehave: {
        alignSelf: "flex-end",
        paddingRight: 5
    },
    styletext: {
        paddingTop: 15
    }
});
