import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import {StatusBar} from "expo-status-bar"

export default function App() {
  const [goalsList, setGoalsList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [id, setId] = useState(0);

  const handleSubmit = (enteredText) => {
    setGoalsList([...goalsList, {text: enteredText, key: getId()}])
    endHandleModalVisible();

  }

  const removeFromList = (id) => {
    let array = [...goalsList]

    array = array.filter(value => {return value.key != id})

    setGoalsList(array)
  }

  const getId = () => {
    setId(id + 1);
    console.log(id)
    return id
  }

  const handleModalVisible = () => {
    setModalVisible(true);
  }

  const endHandleModalVisible = () => {

    setModalVisible(false);
  }

   
  return (

    <>  
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title="Add a New Goal" onPress={handleModalVisible} color="#a065ec"></Button>
      <GoalInput modalVisible={modalVisible} handleSubmit={handleSubmit} onCancel = {endHandleModalVisible}></GoalInput>

      
      <View style={styles.goalsContainer}>

        <FlatList data = {goalsList} renderItem={(itemData) => {
          return (
            <GoalItem itemData = {itemData} removeFromList={removeFromList}/>
            
            )
            
          }}>

        

        </FlatList>
      </View>
      
    </View>

    </>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    

  

  },

  inputContainer:{

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 2,
    

  
  },

  textInput: {
    width: '70%',
    borderColor: '#cccccc',
    borderWidth: 1,
    marginRight: 8,
    padding: 8


  },

  goalsContainer:{
    flex: 4
  },

  


});
