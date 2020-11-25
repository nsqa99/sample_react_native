//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FilledButton from "../../../components/FilledButton";
import { MyColors } from "../../../styles/theme";

// create a component
const Feed = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Quicksand",
          color: "#fff",
          textAlign: "center",
        }}>
        Almost before we knew it, we had left the ground.
      </Text>
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
export default Feed;
