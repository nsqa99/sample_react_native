//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

// create a component
const Input = ({style, onChangeText}) => {
  return (
    <TextInput style={[styles.input, style]} onChangeText={onChangeText} />
  );
};

// define your styles
const styles = StyleSheet.create({
  input: {
    width: '90%',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
});

//make this component available to the app
export default Input;
