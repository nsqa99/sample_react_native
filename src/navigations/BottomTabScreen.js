import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Feed from "../containers/home/Feed";
import Notifications from "../containers/home/Notifications";
import Messages from "../containers/home/Messages";

const Tab = createMaterialBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      shifting={true}
      sceneAnimationEnabled={false}
      activeColor="#fff"
      inactiveColor="black"
      barStyle={{ backgroundColor: "#3C99DC" }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: "home-account",
          tabBarColor: "#3C99DC",
        }}
      />
      <Tab.Screen
        name="Noti"
        component={Notifications}
        options={{
          tabBarIcon: "bell-outline",
          tabBarColor: "tomato",
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: "message-text-outline",
          tabBarColor: "purple",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabScreen;
