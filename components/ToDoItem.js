import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const ToDoItem = ({taskName, taskId, completeStatus}) => {
    let [fontsLoaded] = useFonts({
        'Lato-Light' : require('../assets/fonts/Lato/Lato-Light.ttf'),
        'Lato-Thin' : require('../assets/fonts/Lato/Lato-Thin.ttf'),
    });
    return (
        <TouchableOpacity>
            <View style={styles.todoitem}>
                {completeStatus ?
                    <> 
                        <MaterialCommunityIcons name="check-circle-outline" size={35} color={colors.llgray} />
                    </>
                :
                    <>
                        <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={35} color={colors.llgray}/>
                    </>
                }
                <Text style={[styles.todoitemname, fontsLoaded && {fontFamily: 'Lato-Thin'}]}>{taskName}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ToDoItem

const styles = StyleSheet.create({
    todoitem: {
        // backgroundColor: colors.dwhite,
        paddingVertical: 10,
        paddingHorizontal: 15,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    todoitemname: {
        fontSize: 25,
        marginLeft: 15
    }
})
