import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput, Modal } from "react-native";
import React, { useEffect } from 'react';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-ico-material-design';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Isao } from 'react-native-textinput-effects';

const Buttontest = () => {
    const [openModal, setOpenModal] = React.useState(false);

    function renderModal() {
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
                    <View
                        style={{
                            backgroundColor: "teal",
                            padding: 15,
                            width: "90%",
                            borderRadius: 10
                        }}
                    >
                        <Isao
                            label={'Agent Name'}
                            // this is applied as active border and label color
                            activeColor={'#8F2B1C'}
                            // active border height
                            borderHeight={8}
                            inputPadding={16}
                            labelHeight={24}
                            // this is applied as passive border and label color
                            passiveColor={'#8F2B1C'}
                        />
                        <TouchableOpacity style={styles.IconBehave} onPress={() => { setOpenModal(false) }}>
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
                source={require('./assets/title.jpg')}>
                <StatusBar hidden />
                <TouchableOpacity style={{ width: "30%", height: "7%", paddingTop: 7, marginTop: 600, alignSelf: "center", backgroundColor: "teal", borderRadius: 10 }}
                    onPress={() => {
                        console.log("I'm tapped");
                        setOpenModal(true);
                    }}>
                    <View>
                        <Text style={{ alignSelf: "center", color: "white", paddingTop: 10 }}>Custom button</Text>
                    </View>
                </TouchableOpacity>
                {renderModal()}
            </ImageBackground>
        </View>
    )
}
export default Buttontest;
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