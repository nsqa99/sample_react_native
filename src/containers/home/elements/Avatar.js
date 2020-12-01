//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// create a component
const Avatar = ({ style, uri }) => {
  return <Image style={[styles.container, style]} source={{ uri }} />;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});

//make this component available to the app
export default Avatar;
