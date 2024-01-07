import React from 'react'
import { StyleSheet } from 'react-native'
import { useState } from 'react'
import { View, TextInput, Button, Modal, Image } from 'react-native'

function GoalInput(props) {

    const [enteredText, setEnteredText] = useState('')

    const handleSubmit = (submitProp) => {
        submitProp(enteredText);
        setEnteredText("");
    }
  return (
    <Modal visible={props.modalVisible} animationType='slide'>
    <View style = {styles.inputContainer}>
        <Image style = {styles.image} source={require("../assets/images/goal.png")}></Image>
        <TextInput placeholder = "Your course goal" style={styles.textInput} onChangeText={e => setEnteredText(e)}
        defaultValue={enteredText}></TextInput>

        <View style = {styles.buttonContainer}>


            <View style = {styles.button}>
                <Button title = "Cancel" style = {styles.button} onPress={props.onCancel} color= "#f31282"></Button>
            </View>


            <View style = {styles.button}>
                <Button title="Add goal" onPress={() => handleSubmit(props.handleSubmit)} color = "#5e0acc"></Button>
            </View>
        </View>
      </View>

    </Modal>
  )
}

export default GoalInput


const styles = StyleSheet.create({
    inputContainer:{

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 2,
        backgroundColor: "#311b6b"
        
    
      
      },

      buttonContainer:{
        flexDirection: 'row',
        marginTop: 16

      },
      
      image:{
        width: 100,
        height: 100,
        margin: 20
      },

      button: {
        marginHorizontal: 8,
        width: 100

      },
    
    textInput: {
        width: '100%',
        borderColor: '#e4d0ff',
        borderWidth: 1,
        padding: 16,
        backgroundColor: "#e4d0ff",
        borderRadius: 6,
        color: "#120438"




    },
})