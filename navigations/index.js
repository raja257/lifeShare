import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/AuthScreens/LoginScreen";
import { SignUpScreen } from "../screens/AuthScreens/SignUpScreen";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from "../screens/ContentScreens/HomeScreen";
import { Dimensions } from "react-native";
import HistoryScreen from "../screens/ContentScreens/HistoryScreen";
import DonationScreen from "../screens/ContentScreens/DonationScreen";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DetailScreen from "../screens/ContentScreens/DetailScreen";
// Before rendering any navigation stack
import { enableScreens } from 'react-native-screens';
enableScreens();
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      barStyle={{ backgroundColor: '#ff2744'  }}
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      >
      <Tab.Screen  name="Life Share" component={HomeScreen}  />
      {/* <Tab.Screen name="Donate" component={DonationScreen}  />
      <Tab.Screen name="History" component={HistoryScreen}  /> */}
    </Tab.Navigator>
  );
}

const Authstack = createStackNavigator();
const styleHeader = {
  headerStyle: {
    backgroundColor: '#ff2744',
    
  },
  headerTintColor: '#fff',
}
export const Navigation = () => {

  return (
    <NavigationContainer>
      <Authstack.Navigator >
        <Authstack.Screen name="LoginScreen" component={LoginScreen}  />
        <Authstack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Authstack.Screen name="Details" component={DetailScreen} options={styleHeader} />
        <Authstack.Screen name="Home" component={MyTabs} options={styleHeader} />
        
      </Authstack.Navigator>
    </NavigationContainer>
  );
};
