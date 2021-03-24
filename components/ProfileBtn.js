import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import ModalHeader from './ModalHeader';
import { colors } from '../Colors';
import { Ionicons } from '@expo/vector-icons';
import { Avatar, Overlay } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

const ProfileBtn = () => {
    let [fontsLoaded] = useFonts({
        'Lato-Light' : require('../assets/fonts/Lato/Lato-Light.ttf'),
        'Lato-Thin' : require('../assets/fonts/Lato/Lato-Thin.ttf'),
    });
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
        {fontsLoaded &&
            <View style={styles.profilebtn}>
                <TouchableOpacity onPress={()=>setModalVisible(true)}>
                    <Ionicons name="person-outline" size={30} color={colors.lgray} />
                </TouchableOpacity>
            </View>
        }
        <Overlay backdropStyle={styles.bdstyle} isVisible={modalVisible} overlayStyle={styles.profileoverlay} onBackdropPress={()=>{setModalVisible(false)}}>
            <Pressable style={styles.addtaskmodal}>
                <ModalHeader text="Profile"/>
                <View style={styles.avatarcontainer}>
                    <Avatar
                        rounded
                        size="xlarge"
                        source={{
                            uri:
                            'https://i.pinimg.com/474x/10/91/94/1091948c6b80b65b9eef8c163f0ae42a.jpg',
                        }}
                    />
                </View>
                <Text style={[styles.displayname, fontsLoaded && {fontFamily: 'Lato-Light'}]}>KresnoFatihImani</Text>
                <View style={styles.closebtn}>
                    <TouchableWithoutFeedback onPress={()=>setModalVisible(false)}>
                        <AntDesign name="close" size={30} color={colors.lgray} />
                    </TouchableWithoutFeedback>
                </View>
            </Pressable>
        </Overlay>
        </>
    )
}

export default ProfileBtn

const styles = StyleSheet.create({
    profilebtn: {
        display: 'flex',
        justifyContent: 'center'
    },
    avatarcontainer: {
        marginTop: 20
    },
    profileoverlay:{
        padding: 0
    },
    addtaskmodal: {
        width: 350,
        backgroundColor: colors.cwhite,
        display: 'flex',
        alignItems: 'center',
        margin: 0
    },
    closebtn: {
        position: 'absolute',
        top: 15,
        right: 20
    },
    displayname: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 20,
        color: colors.dgray
    },
    bdstyle: {
        backgroundColor: 'transparent'
    }
})
