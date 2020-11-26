//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import TextView from "../../../components/TextView";
import ViewBox from "../../../components/ViewBox";
import { useSelector } from "react-redux";
// create a component
const Messages = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <ViewBox flex middle centered baseColor>
      <TextView white size={25}>
        Counter Value: {counter}
      </TextView>
    </ViewBox>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Messages;
