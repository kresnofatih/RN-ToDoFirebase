import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../Colors'
import { useFonts } from 'expo-font';
import { Pressable } from 'react-native';

const Header = () => {
    let [fontsLoaded] = useFonts({
        'Lato-Light' : require('../assets/fonts/Lato/Lato-Light.ttf'),
        'Lato-Thin' : require('../assets/fonts/Lato/Lato-Thin.ttf'),
    });
    return (
        <View style={styles.header}>
            <Pressable style={styles.backcontainer}>
                <Text style={[styles.headerback, fontsLoaded && {fontFamily: 'Lato-Light'}]}>
                    {'Back'}
                </Text>
            </Pressable>
            <Text style={[styles.headertitle, fontsLoaded && {fontFamily: 'Lato-Light'}]}>ToDoList</Text>
            <Pressable style={[styles.backcontainer, styles.backright]}>
                <Text style={[styles.headerback, fontsLoaded && {fontFamily: 'Lato-Light'}]}>
                    {'More'}
                </Text>
            </Pressable>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        paddingTop: 45,
        paddingHorizontal: 20,
        paddingBottom: 15,
        width: '100%',
        backgroundColor: colors.lyellow,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headertitle: {
        fontSize: 25,
        color: colors.dgray,
        flex: 1,
        textAlign: 'center',
    },
    headerback: {
        fontSize: 20,
        color: colors.cwhite,
    },
    backcontainer: {
        maxWidth: 100,
        flex:1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    backright: {
        justifyContent: 'flex-end'
    }
})
