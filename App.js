import * as React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import RootStackNavigator from "./src/navigations/RootStackNavigator";

function App() {
  return <RootStackNavigator />;
}

export default App;
