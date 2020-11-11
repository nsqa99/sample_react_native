import * as React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import RootStackScreen from "./src/navigations/RootStackScreen";

const RootStack = createStackNavigator();

function App() {
  return <RootStackScreen />;
}

export default App;
