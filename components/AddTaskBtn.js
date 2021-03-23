import React, { useState } from 'react'
import { Dimensions, Modal, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { colors } from '../Colors'
import { AntDesign } from '@expo/vector-icons';
import ModalHeader from './ModalHeader';
import { useFonts } from 'expo-font';
import { Keyboard} from 'react-native'

const AddTaskBtn = () => {
    let [fontsLoaded] = useFonts({
        'Lato-Light' : require('../assets/fonts/Lato/Lato-Light.ttf'),
        'Lato-Thin' : require('../assets/fonts/Lato/Lato-Thin.ttf'),
    });
    const [modalVisible, setModalVisible] = useState(false);
    const [tempTaskName, setTempTaskName] = useState('');
    return (
        <>
        {fontsLoaded &&
            <View style={styles.addtaskbtn}>
                <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
                    <AntDesign name="plus" size={24} color={colors.lgray} />
                </TouchableWithoutFeedback>
            </View>
        }
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <Pressable style={styles.addtaskmodal} onPress={()=>{Keyboard.dismiss()}}>
                <ModalHeader text="New To Do Item"/>
                <View style={styles.inputfield}>
                    <Text style={[styles.temptasknamelabel, fontsLoaded && {fontFamily: 'Lato-Light'}]}>Task:</Text>
                    <TextInput
                        style={[styles.taskinput, fontsLoaded && {fontFamily: 'Lato-Light'}]}
                        multiline
                        onChangeText={text=>setTempTaskName(text)}
                        onBlur={()=>{Keyboard.dismiss()}}
                        value={tempTaskName}
                    />
                </View>
                <View style={styles.closebtn}>
                    <TouchableWithoutFeedback onPress={()=>setModalVisible(false)}>
                        <AntDesign name="close" size={24} color={colors.lgray} />
                    </TouchableWithoutFeedback>
                </View>
            </Pressable>
        </Modal>
        </>
    )
}

export default AddTaskBtn

const styles = StyleSheet.create({
    addtaskbtn: {
        display: 'flex',
        justifyContent: 'center'
    },
    addtaskmodal: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        backgroundColor: colors.cwhite,
        display: 'flex',
        alignItems: 'center'
    },
    taskinput: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.cwhite,
        fontSize: 20,
        color: colors.dgray,
        borderWidth: 1,
        borderColor: colors.lyellow,
        borderRadius: 100
    },
    temptasknamelabel: {
        marginTop: 20,
        fontSize: 20,
        color: colors.dgray
    },
    closebtn: {
        position: 'absolute',
        top: 20,
        right: 20
    },
    inputfield: {
        display: 'flex',
        width: '80%',
    }
})
