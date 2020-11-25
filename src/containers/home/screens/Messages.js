//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MyColors } from "../../../styles/theme";

// create a component
const Messages = () => {
  return (
    <View style={styles.container}>
      <Text>Messages</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MyColors.baseColor,
  },
});

//make this component available to the app
export default Messages;
