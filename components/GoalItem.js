import React from 'react'

import { StyleSheet } from 'react-native'
import { View, Text, Pressable } from 'react-native'


function GoalItem(props) {
  return (
    
    <View style={styles.goalItem} key = {props.itemData.key}>
        <Pressable onPress={() => props.removeFromList(props.itemData.item.key)} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style = {styles.goalText}>{props.itemData.item.text}</Text>
        </Pressable>
    </View>

   
  )
}

export default GoalItem


const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },

      pressedItem:{
        backgroundColor: '#cccccc',
        borderRadius: 6
      },
    goalText:{
        padding: 8,
        color: 'white',
      
    }
})