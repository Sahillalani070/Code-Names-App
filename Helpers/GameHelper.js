import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from 'react';
import jsonData from "../dict.json";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-ico-material-design';
import { useNavigation } from "@react-navigation/native";
import { Auth, DataStore, API, graphqlOperation } from "aws-amplify";
import { GameSession, Player, StateGame, TeamColor } from "../src/models";
import { createGameSession, createPlayer } from "../src/graphql/mutations";
import "@azure/core-asynciterator-polyfill";
// extracting data
const DataList = jsonData.words;
var value = IndicestoWords();
// const [game, setGame] = useState(null);
const AddOrJoinGame = async () => {
    // code to join pre-existing game

    // code to create a new game
    await createGame();
}
const createGame = async () => {
    const userData = await Auth.currentAuthenticatedUser();

    // const response = await API.graphql(graphqlOperation(createPlayer, {
    //     input: {
    //         id: userData.attributes.sub,
    //         PlayerName: userData.attributes.nickname,
    //         Team: TeamColor.UNDECIDED,
    //         Score: 0,
    //     },
    // }),
    // );
    // console.log("Response: \n");
    // console.log(response);

    const response2 = await API.graphql(graphqlOperation(createGameSession, {
        input: {
            Players: [userData.attributes.nickname],
            GameState: StateGame.WAITING,
            CurrentTurn: TeamColor.UNDECIDED,
        },
    }),
    );
    console.log("Response: \n");
    console.log(response2);
    // const newPlayer = await DataStore.save(new Player({
    //     PlayerName: userData.attributes.nickname,
    //     Team: TeamColor.UNDECIDED,
    //     Score: 0
    // })
    // );
    // console.log(userData)
    //     const newGame = new GameSession({
    //         Players: [userData.attributes.nickname],
    //         GameState: StateGame.WAITING,
    //         CurrentTurn: TeamColor.UNDECIDED
    //     });
    //     // console.log(newGame);
    //     await DataStore.save(newGame);
};

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
const Boxes = () => {
    return (
        <View style={styles.Screen}>
            {/* <Text>Game ID: {GameSession.id} </Text> */}
            <View style={styles.boxContainer}>
                {
                    value.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.box} onPress={() => { console.log(index); }}>
                            <View style={styles.inner}>
                                <TouchableOpacity style={styles.IconBehave} onPress={() => { console.log("key"); }}>
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
                <View style={styles.teambox}>
                    <Text>Red Team</Text>
                </View>
                <View style={styles.Gamelog}>
                </View>
                <View style={styles.teambox}>
                    <Text>Blue Team</Text>
                </View>
            </View>
        </View >
    )
}
export { Boxes, AddOrJoinGame }
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
