import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../containers/home/screens/HomeScreen";
import AuthStackScreen from "./AuthStackScreen";
import { Provider as PaperProvider } from "react-native-paper";
import Home from "../containers/home/animated screen/Home";

const RootStack = createStackNavigator();

function RootStackScreen() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}>
          {/* <RootStack.Screen name="AuthStack" component={AuthStackScreen} />
          <RootStack.Screen name="Home" component={HomeScreen} /> */}
          <RootStack.Screen name="Home" component={Home} />
        </RootStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default RootStackScreen;
