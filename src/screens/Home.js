import React, {useState, useEffect} from 'react';

import CustomButton from './utils/customButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import{
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert


} from 'react-native';

import GlobalStyle from './utils/GlobalStyle'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';

export default function Home({navigation, route}){


const [name, setName] = useState('');
const [age, setAge] = useState('');

useEffect(() => {

  getdata();

}, []);


const getdata = () => {

try {

AsyncStorage.getItem('UserData')

.then ( value => {

  if (value != null)

  {

  let user = JSON.parse(value);
  setName(user.Name);
  setAge(user.Age);

  }

})


  
} 

catch (error) 

{
  
console.log (error)

}

}


const updateData = async () => {

  if (name.length == 0)

  {

Alert.alert('Warning!', 'Plz Write Your Data.')

  }

else

{

try {

  var user = {

    Name: name

  }

await AsyncStorage.mergeItem('UserData', JSON.stringify(user));

Alert.alert('Success!', 'Your Data has been Updated.');

} 

catch (error) 

{

console.log(error);

}

}

}

const removeData = async () => {

try {

await AsyncStorage.clear();
navigation.navigate('Login');


} 

catch (error) 

{

console.log(error);

}

}


    
      return(
        <View style = {styles.body}>
          <Text style = {
            // GlobalStyle.CustomFont,
            styles.text1
          }
            > 
           Welcome {name}!
           
           </Text>

           <Text style = {
            // GlobalStyle.CustomFont,
            styles.text1
          }
            > 
           Your age is {age}
           
           </Text>


           <TextInput
           
           style = {styles.input}
           placeholder = 'Enter Your Name'
           value= {name}
           onChangeText={(value) => setName(value)}

           />



<CustomButton

style = {styles.button1}
title= 'Update'
color= '#46bdf0'
onPressFunction= {updateData}

/>



<CustomButton

style = {styles.button2}
title= 'Remove'
color= '#13f2c6'
onPressFunction= {removeData}

/>

        </View>
      )
    }


    const styles= StyleSheet.create({

        body:{
          flex: 1,
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

      button1: {
        fontFamily: 'Tapestry-Regular',
        fontSize: 35,
        padding: 10,
        marginBottom: 15,
        border: 1,
        borderRadius: 5
      },

      button2: {
        fontFamily: 'Tapestry-Regular',
        fontSize: 35,
        padding: 10,
        borderRadius: 5
      },

      input:{
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 50,
        marginBottom: 20
    }
      
      })    