import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { colors } from '../Colors'
import { useFonts } from 'expo-font';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TodoList = () => {
    let [fontsLoaded] = useFonts({
        'Lato-Light' : require('../assets/fonts/Lato/Lato-Light.ttf'),
        'Lato-Thin' : require('../assets/fonts/Lato/Lato-Thin.ttf'),
    });
    return (
        <View style={styles.todolistcontainer}>
            <Header/>
            <Footer/>
        </View>
    )
}

export default TodoList

const styles = StyleSheet.create({
    todolistcontainer: {
        flex: 1,
        backgroundColor: colors.cwhite,
        display: 'flex',
        flexDirection: 'column',
        width: Dimensions.get('screen').width,
    }
})
