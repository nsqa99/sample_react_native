import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStackNavigator from "./AuthStackNavigator";
import BottomTabNavigator from "./BottomTabNavigator";

const RootStack = createStackNavigator();

function RootStackNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Home" component={BottomTabNavigator} />
        {/* <RootStack.Screen name="AuthStack" component={AuthStackScreen} />
          <
          {/* <RootStack.Screen name="Home" component={HomeStackScreen} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootStackNavigator;
