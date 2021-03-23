import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Splash from './screens/Splash';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import { getCurrentScreen } from './features/appSlice';
import TodoList from './screens/TodoList';

const Internal = () => {
    const currentScreen = useSelector(getCurrentScreen)
    return (
        <View>
            <StatusBar style='dark'/>
            {currentScreen==='splash' &&
                <Splash/>
            }
            {currentScreen==='todolist' &&
                <TodoList/>
            }
        </View>
    )
}

export default Internal

const styles = StyleSheet.create({})
