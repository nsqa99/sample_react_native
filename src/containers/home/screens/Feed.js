//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FilledButton from "../../../components/FilledButton";

// create a component
const Feed = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
      <FilledButton title="logout" onPress={() => navigation.popToTop()} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

//make this component available to the app
export default Feed;
