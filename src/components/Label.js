//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Label = ({style, title}) => {
  return <Text style={[styles.label, style]}>{title}</Text>;
};

// define your styles
const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginLeft: 10,
    marginVertical: 5,
    alignSelf: 'flex-start',
  },
});

//make this component available to the app
export default Label;
