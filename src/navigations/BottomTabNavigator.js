import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { Component } from "react";
import TabBar from "../components/tabbar/TabBar";
import Feed from "../containers/home/screens/Feed";
import Noti from "../containers/home/screens/Notifications";
import Mes from "../containers/home/screens/Messages";
import Chat from "../containers/home/screens/Chat";
import Profile from "../containers/home/screens/Profile";

const BottomTab = createBottomTabNavigator();

// create a component
const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Feed"
      tabBar={(props) => <TabBar {...props} />}
      headerMode="none">
      <BottomTab.Screen name="Feed" component={Feed} />
      <BottomTab.Screen name="Inbox" component={Mes} />
      <BottomTab.Screen name="Noti" component={Noti} />
      <BottomTab.Screen name="Message" component={Chat} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};

//make this component available to the app
export default BottomTabNavigator;
