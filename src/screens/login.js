import React, {useState, useEffect} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    Alert
  
  
  } from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import CustomButton from './utils/customButton';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({navigation}){

const [name, setName] = useState('');
const [age, setAge] = useState('');

useEffect(() => {

  getdata();

}, []);


const getdata = () =>{

try {

AsyncStorage.getItem('UserData')

.then ( value => {

  if (value!= null)
  {
  navigation.navigate("Home");
  }

})


  
} 

catch (error) 

{
  
console.log (error)

}

}


const setData = async () => {

    if (name.length == 0 || age.length == 0) 

    {

Alert.alert('Warning!', 'Plz Write Your Data.')

    }

else

{

try {
  
var user = {

Name: name,
Age: age

}

await AsyncStorage.setItem('UserData', JSON.stringify(user));
navigation.navigate('Home');

} 

catch (error) 

{

  console.log(error);

}

}

}

return(

    <View
    style = {styles.body}
    >
<Image

style= {styles.logo}
source= {require('../../assets/asyncStorage.png')}

/>

<Text style = {styles.text}
>

Async Storage    

</Text>

<TextInput

style = {styles.input}
placeholder = 'Enter Your Name'
onChangeText={(value) => setName(value)}

/>

<TextInput
           
           style = {styles.input}
           placeholder = 'Enter Your Age'
           onChangeText={(value) => setAge(value)}
           />

<CustomButton
style = {styles.button}
title= 'Login'
color= '#1eb900'
onPressFunction= {setData}

/>
    </View>
)

}


  const styles= StyleSheet.create({

    body: {

      flex: 1,
    //   justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0080ff'

    },

    logo: {
        height: 100,
        width: 100,
        margin: 20
    },

    text: {
        fontSize: 30,
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 100

    },

    input:{
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 15
    },

    button: {
    
      marginBottom: 20,
      borderRadius: 5
    },

  });