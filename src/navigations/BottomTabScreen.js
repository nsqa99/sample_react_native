//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../containers/home/screens/Feed";
import Messages from "../containers/home/screens/Messages";
import Notifications from "../containers/home/screens/Notifications";
import Icon from "react-native-ionicons";
import { HeaderBackground } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

// create a component
const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "black",

        style: {
          backgroundColor: "tomato",
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Feed: "paper",
            Messages: "chatboxes",
            Noti: "notifications",
          };
          return <Icon name={icons[route.name]} color={color} size={size} />;
        },
      })}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          title: "Newsfeed",
        }}
      />
      <Tab.Screen
        name="Noti"
        component={Notifications}
        options={{
          title: "Notifications",
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          title: "Messages",
        }}
      />
    </Tab.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default BottomTabScreen;
