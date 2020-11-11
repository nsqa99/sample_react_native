//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// create a component
const IconButton = ({ name, style, onPress, size }) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPress}>
        <Icon name={name} size={size} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default IconButton;
