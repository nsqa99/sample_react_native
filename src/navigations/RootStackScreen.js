import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../containers/home/HomeScreen";
import AuthStackScreen from "./AuthStackScreen";
import { Provider as PaperProvider } from "react-native-paper";

const RootStack = createStackNavigator();

function RootStackScreen() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="AuthStack"
          screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="AuthStack" component={AuthStackScreen} />
          <RootStack.Screen name="Home" component={HomeScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default RootStackScreen;
