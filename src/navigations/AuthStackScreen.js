//import liraries
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import LoginScreen from "../containers/authen/screens/LoginScreen";
import RegistrationScreen from "../containers/authen/screens/RegistrationScreen";

// create a component

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Registration" component={RegistrationScreen} />
    </AuthStack.Navigator>
  );
};

//make this component available to the app
export default AuthStackScreen;
