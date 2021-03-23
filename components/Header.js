import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../Colors'
import { useFonts } from 'expo-font';

const Header = () => {
    let [fontsLoaded] = useFonts({
        'Lato-Light' : require('../assets/fonts/Lato/Lato-Light.ttf'),
        'Lato-Thin' : require('../assets/fonts/Lato/Lato-Thin.ttf'),
    });
    return (
        <View style={styles.header}>
            <Text style={[styles.headertitle, fontsLoaded && {fontFamily: 'Lato-Light'}]}>ToDoList</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        paddingTop: 45,
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
