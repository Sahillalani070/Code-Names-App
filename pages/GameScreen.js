import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput, Modal } from "react-native";
import React, { useEffect } from 'react';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-ico-material-design';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { AddOrJoinGame } from "../Helpers/GameHelper"
import { Isao } from 'react-native-textinput-effects';


const NewGame = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const [openModal1, setOpenModal1] = React.useState(false);
    function NewModal() {
        return (
            <Modal
                visible={openModal}
                animationType="slide"
                transparent={true}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,0.5)"
                    }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "teal",
                            padding: 15,
                            width: "90%",
                            borderRadius: 10
                        }}
                        onPress={() => { AddOrJoinGame() }}

                    >
                        {/* <Isao
                            label={'Agent Name'}
                            // this is applied as active border and label color
                            activeColor={'#8F2B1C'}
                            // active border height
                            borderHeight={8}
                            inputPadding={16}
                            labelHeight={24}
                            // this is applied as passive border and label color
                            passiveColor={'#8F2B1C'}
                        /> */}
                        <TouchableOpacity style={styles.IconBehave} onPress={() => { setOpenModal(false) }}>
                            <Icon name="cancel-button" style={{ color: '#448aff' }} height="20" />
                        </TouchableOpacity>
                        {/* <TextInput style={{ height: "50%", width: "50%", borderWidth: 1, borderRadius: 10, alignSelf: "center" }}
                            placeholder="Type here..." /> */}

                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
    function JoinModal() {
        return (
            <Modal
                visible={openModal1}
                animationType="slide"
                transparent={true}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,0.5)"
                    }}>
                    <View
                        style={{
                            backgroundColor: "teal",
                            padding: 15,
                            width: "90%",
                            borderRadius: 10
                        }}
                    >
                        <Isao
                            label={'GameID'}
                            // this is applied as active border and label color
                            activeColor={'#8F2B1C'}
                            // active border height
                            borderHeight={8}
                            inputPadding={16}
                            labelHeight={24}
                            // this is applied as passive border and label color
                            passiveColor={'#8F2B1C'}
                        />
                        <TouchableOpacity style={styles.IconBehave} onPress={() => { setOpenModal1(false) }}>
                            <Icon name="cancel-button" style={{ color: '#448aff' }} height="20" />
                        </TouchableOpacity>
                        {/* <TextInput style={{ height: "50%", width: "50%", borderWidth: 1, borderRadius: 10, alignSelf: "center" }}
                            placeholder="Type here..." /> */}

                    </View>
                </View>
            </Modal>
        );
    }
    return (
        <View>
            <ImageBackground style={{ height: "100%", width: "100%" }}
                source={require('../assets/splash.jpg')}>
                <StatusBar hidden />
                <View style={{ marginTop: 575, height: 80 }}>
                    <TouchableOpacity style={{ width: "50%", height: 50, paddingTop: 7, alignSelf: "center", backgroundColor: "teal", borderRadius: 10 }}
                        onPress={() => {
                            console.log("I'm tapped");
                            // setOpenModal(true);
                            AddOrJoinGame();
                        }}>
                        <View>
                            <Text style={{ textAlign: "center", alignSelf: "center", color: "white", paddingTop: 10 }}>Play Game</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <View style={{ height: 100 }}>
                    <TouchableOpacity style={{ width: "50%", height: 50, paddingTop: 7, alignSelf: "center", backgroundColor: "teal", borderRadius: 10 }}
                        onPress={() => {
                            console.log("I'm tap");
                            setOpenModal1(true);
                        }}>
                        <View>
                            <Text style={{ alignSelf: "center", color: "white", paddingTop: 10 }}>Join Existing Game</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {NewModal()}
                {JoinModal()} */}
            </ImageBackground >
        </View >
    )
}
export default NewGame;
const styles = StyleSheet.create({

    container: {
        width: 80,
        height: 50,
        padding: 2,
        backgroundColor: 'green'
    },
    IconBehave: {
        alignSelf: "flex-end",
        paddingRight: 2,
        paddingBottom: 2,
        fontSize: 10
    }
});