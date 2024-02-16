import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from 'react';
import jsonData from "../dict.json";
import { StatusBar } from "expo-status-bar";
import Icon from 'react-native-ico-material-design';
import { useNavigation } from "@react-navigation/native";
// import { generateClient } from '@aws-amplify/core';
import { Amplify, Auth, DataStore, API, graphqlOperation } from "aws-amplify";
import { GameSession, Player, StateGame, TeamColor } from "../src/models";
import { createGameSession, updateGameSession } from "../src/graphql/mutations";
import * as queries from '../src/graphql/queries';

import "@azure/core-asynciterator-polyfill";
import awsmobile from "../src/aws-exports";

// const client = generateClient()
Amplify.configure(awsmobile);

// extracting data
const DataList = jsonData.words;
var value = IndicestoWords();
var mapvals = mapGen();
var maplist = mapvals[0];
var startteam = mapvals[1];
// console.log(maplist);
// const [game, setGame] = useState(null);
var playerList: any[] = [];
// function NewGame() {
//     useEffect(() => {
//         const userData = Auth.currentAuthenticatedUser();
//         const newUser = 
//     });
//     AddOrJoinGame();
// }
const AddOrJoinGame = async () => {
    console.warn("Create online Game");
    const gamedata = await availableGame();

    // code to join pre-existing game
    if (gamedata.length > 0) {
        const game = gamedata[0];
        playerList = game.Players;
        console.log("GAAAMEEE", game)
        joinGame(game);
    }
    // code to create a new game
    else {
        await createGame();
    }
}
const availableGame = async () => {
    // console.log("available game", game);
    const result = await API.graphql({ query: queries.listGameSessions });
    // console.log(result);
    const game = result.data.listGameSessions.items;
    // console.log("Queried Data:", game[0]);
    return game;
}
const joinGame = async (game) => {
    // console.log(`joining ${game}`)
    const userData = await Auth.currentAuthenticatedUser();
    const nickname = userData.attributes.nickname
    // console.log(playerList)
    if (!playerList.includes(nickname)) {
        playerList.push(nickname);
    }
    console.log("UPDATED pLAYER LIST:", playerList);
    try {
        const updateGame = await API.graphql({
            query: updateGameSession,
            variables: {
                input: {
                    "id": `${game.id}`,
                    "Players": playerList,
                    "GameState": StateGame.WAITING,
                    "CurrentTurn": TeamColor.UNDECIDED
                }
            }
        }
        );
        // console.log("updated Game:", updateGame)
    }
    catch (error) {
        console.error(error);
    }
}
const deleteGame = async (game) => {
    console.log(`Deleting ${game}`)
}

const createGame = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    const nickname = userData.attributes.nickname
    // console.log("userData: ", userData);
    try {
        // console.log("API: ", API)
        const response = await API.graphql({
            query: createGameSession,
            variables: {
                input: {
                    "Players": [nickname],
                    "GameState": StateGame.WAITING,
                    "CurrentTurn": TeamColor.UNDECIDED
                }
            }
        });
        console.log("Response: \n", response);
    }
    catch (error) {
        console.error(error);
    }
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
function mapGen() {

    var maplist = [];
    var blue = 9;
    var red = 9;
    var white = 7;
    var assasin = 1
    while (maplist.length < 25) {
        var x = Math.floor(Math.random() * 4);
        if (x == 0 && blue > 0) {
            maplist.push("blue");
            blue -= 1;
        }
        else if (x == 1 && red > 0) {
            maplist.push("red");
            red -= 1;
        }
        else if (x == 2 && white) {
            maplist.push("white");
            white -= 1;
        }
        else if (x == 3 && assasin > 0) {
            maplist.push("gray");
            assasin -= 1;
        }

    }
    var startteam = "None";
    if (blue == 1) {
        startteam = "red";
    }
    else {
        startteam = "blue";
    }
    return ([maplist, startteam]);
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
    const [boxcolor, setBoxcolor] = React.useState([]);
    function updateColor(index) {
        let tempBoxColor = [...boxcolor];
        if (!tempBoxColor.includes(index))
            tempBoxColor.push(index)
        setBoxcolor(tempBoxColor);
    }

    return (
        <View style={styles.Screen}>
            {/* <Text>Game ID: {GameSession.id} </Text> */}
            <View style={styles.boxContainer}>
                {
                    value.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.box}>
                            <View style={[styles.inner, boxcolor.includes(index) ? { backgroundColor: maplist[index] } : { backgroundColor: "#c8c8c8" }]}>
                                <TouchableOpacity style={styles.IconBehave} onPress={() => { updateColor(index); console.log(index); }}>
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
    innerblue: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    innerred: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    innerwhite: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    innerblack: {
        flex: 1,
        backgroundColor: 'black',
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
