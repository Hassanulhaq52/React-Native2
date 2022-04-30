import React, {useState} from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import{
  StyleSheet,
  Text,
  View,
  Pressable,


} from 'react-native';

import GlobalStyle from './utils/GlobalStyle'

export default function ScreenA({navigation, route}){

const Users = [
{
  id: 1,
  name: 'user A'
}, 

{
  id: 1,
  name: 'user B'
}, 

{
  id: 1,
  name: 'user C'
}, 

];

const [name, setName] = useState('');

    const  onPressHandler = () =>{
      
    // navigation.navigate('Screen_B');
    // navigation.openDrawer();

    for(let user of Users){
      setName(user.name);
    }
    }
    
      return(
        <View style = {styles.body}>
          <Text style = {
            // GlobalStyle.CustomFont,
            styles.text1
          }
            > 
            Screen A</Text>
          
          <Pressable 
          onPress={onPressHandler} 
          style = {({ pressed}) => ({backgroundColor: pressed? '#0a79a8': '#5edaff'})}>
          
            <Text style= {styles.button}>Get the Last User</Text>
          </Pressable>

          <Text style = {styles.text}>{name}</Text>


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
        fontSize: 40,
        fontWeight: 'bold',
        margin: 5,
       
      },

      text1:{
        fontSize: 70,
        // fontWeight: 'bold',
        margin: 10,
        fontFamily: 'SquarePeg-Regular',
        
      },

      button:{
        fontFamily: 'Tapestry-Regular',
        fontSize: 35,
        padding: 10
      }
      
      })    