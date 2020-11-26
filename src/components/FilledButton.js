//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// create a component
const FilledButton = ({ title, onPress, width, height }) => {
  return (
    <TouchableOpacity
      style={[styles.loginBtn, { ...{ width, height } }]}
      onPress={onPress}>
      <Text style={styles.loginBtn_text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  loginBtn: {
    padding: 20,
    width: "80%",
    marginTop: 30,
    backgroundColor: "#f2f2f2",
    color: "black",
    borderRadius: 8,
  },

  loginBtn_text: {
    textAlign: "center",
    fontSize: 20,
  },
});

//make this component available to the app
export default FilledButton;
