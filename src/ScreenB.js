import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import{
  StyleSheet,
  Text,
  View,
  Pressable,


} from 'react-native';

export default function ScreenB({navigation}){

    const  onPressHandler = () =>{
    navigation.navigate('Screen_A');
    }
    return(
      <View style = {styles.body}>
        <Text style = {styles.text}> Screen B</Text>
        <Pressable 
        onPress={onPressHandler} 
        style = {({ pressed}) => ({backgroundColor: pressed? '#0a79a8': '#5edaff'})}>
        
          <Text 
          style= {styles.text}>
            Go Back to Screen A</Text>
        </Pressable>
        
      </View>
    )
  }

  const styles= StyleSheet.create({

    body:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
  text:{
    fontSize: 35,
    fontWeight: 'bold',
    margin: 5,
    
  }
  
  }) 