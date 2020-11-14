//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import TabBar from "../../../components/TabBar";

// create a component
const Home = () => {
  return (
    <View style={styles.container}>
      <TabBar />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "tomato",
  },
});

//make this component available to the app
export default Home;
