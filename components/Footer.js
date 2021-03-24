import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { colors } from '../Colors'
import { Feather } from '@expo/vector-icons';
import AddTaskBtn from './AddTaskBtn';
import ProfileBtn from './ProfileBtn';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <ProfileBtn/>
            <AddTaskBtn/>
            <View style={styles.sidebtn}>
                <Feather name="more-vertical" size={30} color="black" />
            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        paddingHorizontal: 15,
        position: 'relative',
        paddingTop: 10,
        paddingBottom: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 0,
        backgroundColor: colors.lyellow
    },
    sidebtn: {
        display: 'flex',
        justifyContent: 'center',
    }
})
