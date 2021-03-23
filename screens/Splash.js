import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { colors } from '../Colors'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { getCurrentScreen } from '../features/appSlice';

const Splash = () => {
    const currentScreen = useSelector(getCurrentScreen);
    let [fontsLoaded] = useFonts({
        'Lato-Light' : require('../assets/fonts/Lato/Lato-Light.ttf'),
        'Lato-Thin' : require('../assets/fonts/Lato/Lato-Thin.ttf'),
    });
    return (
        <View style={styles.splashcontainer}>
            <Image
                style={styles.splashimage}
                source={require('../assets/taxi-task-presentation.png')}
                resizeMode="contain"
            />
            <Text style={[styles.splashtitle, fontsLoaded && {fontFamily: 'Lato-Light'}]}>ToDoFirebase</Text>
            <Text style={[styles.splashsubtitle, fontsLoaded && {fontFamily: 'Lato-Thin'}]}>Your Favorite To Do List</Text>
            <View style={styles.loginbutton}>
                <TouchableWithoutFeedback onPress={()=>console.log('screen: ', currentScreen)}>
                    <AntDesign name="rightcircle" size={30} color={colors.lyellow} />
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    splashcontainer: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.cwhite,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashimage: {
        width: Dimensions.get('screen').width,
        maxHeight: 300,
    },
    splashtitle: {
        fontSize: 30,
        color: colors.lyellow
    },
    splashsubtitle: {
        marginTop: 10,
        fontSize: 20,
        color: colors.dgray
    },
    loginbutton: {
        position: 'absolute',
        bottom: 30,
    }
})
