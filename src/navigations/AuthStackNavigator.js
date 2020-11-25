//import liraries
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import LoginScreen from "../containers/authen/screens/Login";
import RegistrationScreen from "../containers/authen/screens/Registration";

// create a component

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Registration" component={Registration} />
    </AuthStack.Navigator>
  );
};

//make this component available to the app
export default AuthStackNavigator;
