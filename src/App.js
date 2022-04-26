import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
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
const Tab = createMaterialTopTabNavigator();

function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator

        screenOptions={({ route }) => ({

          tabBarActiveTintColor: '#b01207',
          tabBarInactiveTintColor: '#d30dde',
          tabBarActiveBackgroundColor: '#799aed',
          tabBarInactiveBackgroundColor: '#addaed',
        tabBarShowLabel: true,
        tabBarLabelStyle : {fontSize: 18},
        tabBarShowIcon: true,


          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = "amilia";
              size = focused ? 25 : 20;
            }
            else if (route.name === 'Screen_B') {
              iconName = 'bootstrap';
              size = focused ? 25 : 20;
              // color = focused? 'red': '#00ff00';
            }

            return (
              <FontAwesome5
                name={iconName}
                size={size}
              />
            )

          }



        })}

      // tabBarOptions = {{
      
      //   activeTintColor: '#f0f',
      //   inactiveTintColor: '#f00f',
      //   activeBackgroundColor: '#f0f',
      //   inactiveBackgroundColor: '#f00f',
      //   showLabel: false


      // }}
      
activeColor = '#5a8fe6'
inactiveColor='#d054e3'
barStyle = {{backgroundColor: '#93ed95'}}

      >
        <Tab.Screen
          name='Screen_A'
          component={ScreenA}
          // options = {{tabBarBadge: 'A'}}

        />

        <Tab.Screen
          name='Screen_B'
          component={ScreenB}
        />
      </Tab.Navigator>

    </NavigationContainer>

  )
}

export default App;