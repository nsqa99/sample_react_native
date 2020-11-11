//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Heading = ({text, style}) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};

// define your styles
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    marginBottom: 20,
  },
});

//make this component available to the app
export default Heading;
