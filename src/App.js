import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './screens/Home';
import Login from './screens/login';

import{
  StyleSheet,
  Text,
  View,
  Pressable,
  
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';



// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
initialRouteName='Login'
      screenOptions={{

        headerTitleAlign: 'center',
    
        headerStyle: {
backgroundColor: '#279be8'
},
headerTintColor: '#ffffff',

headerTitleStyle: {
  fontSize: 25,
  fontWeight: 'bold',
  
},

      }}
    
      >
        <Stack.Screen
          name='Login'
          component={Login}

        options = {{

headerShown: false

      }} 

        />

        <Stack.Screen
          name='Home'
          component={Home}

        />

      </Stack.Navigator>

    </NavigationContainer>

  )
}

export default App;