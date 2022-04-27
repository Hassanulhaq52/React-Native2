import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import{
  StyleSheet,
  Text,
  View,
  Pressable,
  
} from 'react-native';



// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator
initialRouteName='Screen_A'
      screenOptions={{
      drawerPosition: 'left',
        drawerType : 'front',
        swipeEdgeWidth : 100,
        drawerHideStatusBarOnOpen: false,
        overlayColor: '#00000090',
        headerShown: true,
        swipeEnabled: true,
        gestureEnabled: true,
        headerTitleAlign: 'center',
        headerStyle: {
backgroundColor: '#279be8'
        },
headerTintColor: '#ffffff',

headerTitleStyle: {
  fontSize: 25,
  fontWeight: 'bold',
  
},


        drawerStyle : {

          backgroundColor : '#e8f6fa',
          width : 250
          
        }
        


      }}
    
      >
        <Drawer.Screen
          name='Screen_A'
          component={ScreenA}

        options = {{
          title : 'Screen_A Title',
drawerIcon: ({focused}) => (

  <FontAwesome5
  name = "amilia"
              size = {focused ? 25 : 20}
              color = {focused ? '#1eb5e3' : '#bde4f0'}
/>
)



      }} 

        />

        <Drawer.Screen
          name='Screen_B'
          component={ScreenB}
          options = {{
            title : 'Screen_B Title',


            drawerIcon: ({focused}) => (

              <FontAwesome5
              name = "bootstrap"
                          size = {focused ? 25 : 20}
                          color = {focused ? '#1eb5e3' : '#bde4f0'}
            />
            )


        }} 

        />

      </Drawer.Navigator>

    </NavigationContainer>

  )
}

export default App;