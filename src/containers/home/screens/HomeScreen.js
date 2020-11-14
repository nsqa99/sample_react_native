//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import BottomTabScreenMaterial from "../../../navigations/BottomTabScreenMaterial";
import BottomTabScreen from "../../../navigations/BottomTabScreen";

// create a component
function HomeScreen({ route, navigation }) {
  const { username } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <BottomTabScreen />
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3C99DC",
  },
  title: {
    fontWeight: "500",
    fontSize: 20,
    width: "100%",
    color: "white",
    marginLeft: 20,
  },
});

export default HomeScreen;
