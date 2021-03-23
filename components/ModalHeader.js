import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../Colors'
import { useFonts } from 'expo-font';

const ModalHeader = ({text}) => {
    let [fontsLoaded] = useFonts({
        'Lato-Light' : require('../assets/fonts/Lato/Lato-Light.ttf'),
        'Lato-Thin' : require('../assets/fonts/Lato/Lato-Thin.ttf'),
    });
    return (
        <View style={styles.modalheader}>
            <Text style={[styles.headertitle, fontsLoaded && {fontFamily: 'Lato-Light'}]}>{text}</Text>
        </View>
    )
}

export default ModalHeader

const styles = StyleSheet.create({
    modalheader: {
        paddingTop: 15,
        paddingBottom: 15,
        width: '100%',
        backgroundColor: colors.lyellow,
        display: 'flex',
        alignItems: 'center'
    },
    headertitle: {
        fontSize: 25,
        color: colors.dgray
    }
})
