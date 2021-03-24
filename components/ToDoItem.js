import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../Colors'
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const ToDoItem = ({taskName, taskId, completeStatus}) => {
    let [fontsLoaded] = useFonts({
        'Lato-Light' : require('../assets/fonts/Lato/Lato-Light.ttf'),
        'Lato-Thin' : require('../assets/fonts/Lato/Lato-Thin.ttf'),
    });
    return (
        <TouchableOpacity>
            {fontsLoaded &&
                <View style={styles.todoitem}>
                    <View style={styles.spaceview}>
                        <Text style={[styles.todoitemname, fontsLoaded && {fontFamily: 'Lato-Thin'}]}>
                            {taskName.length>20 ? taskName.substring(0, 20): taskName}
                        </Text>
                        {completeStatus ?
                            <> 
                                <Ionicons name="checkbox-outline" size={35} color={colors.llgray} />
                            </>
                        :
                            <>
                                <Ionicons name="square-outline" size={35} color={colors.llgray} />
                            </>
                        }
                    </View>
                    <FontAwesome name="trash-o" size={35} color={colors.llgray} />
                </View>
            }
        </TouchableOpacity>
    )
}

export default ToDoItem

const styles = StyleSheet.create({
    todoitem: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    todoitemname: {
        fontSize: 25,
        // marginLeft: 15,
        // flex: 1,
    },
    spaceview: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        marginRight: 15
    }
})
