import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import jsonData from "./dict.json";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-ico-material-design';

// extracting data
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
        // console.log(x);
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
    // console.log(listw)
    return listw;
}
const Game = () => {
    const Boxes = () => {
        return (
            <View style={styles.Screen}>
                <View style={styles.boxContainer}>
                    {
                        value.map((item, index) => (
                            <TouchableOpacity key={index} style={styles.box} OnPress={() => { console.log("object"); }}>
                                <View style={styles.inner}>
                                    <TouchableOpacity style={styles.IconBehave} OnPress={() => { console.log("key"); }}>
                                        <Icon name="thumb-up-button" style={{ color: '#448aff' }} height="12" />
                                    </TouchableOpacity>
                                    <Text style={styles.styletext}>{item}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                        )}
                </View>
                <View style={styles.Cluebox}>
                    <TextInput style={{ height: "50%", width: "50%", borderWidth: 1, borderRadius: 10, alignSelf: "center" }}
                        placeholder="Type here..."
                    />

                </View>
                <View style={styles.boxContainer2}>
                    <View style={styles.teambox} backgroundColor="rgb(236,91,32)">
                        <Text>Red Team</Text>
                    </View>
                    <View style={styles.Gamelog} backgroundColor="rgb(242,215,180)">
                    </View>
                    <View style={styles.teambox} backgroundColor="rgb(2,172,197)">
                        <Text>Blue Team</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View>
            <StatusBar hidden />

            <Boxes />
        </View>
    );
}
export default Game;
const styles = StyleSheet.create({
    boxContainer: {
        width: '100%',
        height: '40%',
        //backgroundColor: 'red',
        padding: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    boxContainer2: {
        width: '100%',
        height: '100%',
        //backgroundColor: 'red',
        // padding: 2,
        flexDirection: 'row',
        // flexWrap: 'wrap',
    },

    box: {
        width: '20%',
        height: '20%',
        padding: 2,
        backgroundColor: 'green'
    },
    inner: {
        flex: 1,
        backgroundColor: '#c8c8c8',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    IconBehave: {
        alignSelf: "flex-end",
        paddingRight: 2,
        paddingBottom: 2,
        fontSize: 10
    },
    styletext: {
        paddingBottom: 15,
        fontSize: 10
    },
    teambox: {
        // paddingTop: 2,
        height: '50%',
        width: '35%',
        // borderWidth: 2, // Border width in pixels
        // borderColor: 'black', // Border color
        // borderRadius: 10,
    },
    Gamelog: {
        height: '50%',
        width: '30%',
        borderWidth: 2, // Border width in pixels
        borderColor: 'black', // Border color
        borderRadius: 10,
        padding: 15
    },
    Cluebox: {
        width: '100%',
        height: '10%',
        borderWidth: 2, // Border width in pixels
        borderColor: 'black', // Border color
        borderRadius: 10,
    },
    Screen: {
        height: '100%',
        width: '100%'
    }
});
