//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FilledButton from "../../../components/FilledButton";
import ViewBox from "../../../components/ViewBox";
import TextView from "../../../components/TextView";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../redux/actions/counter";

// create a component
const Feed = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(
      actions.changeCounterAction(
        actions.COUNTER.INCREMENT_COUNTER,
        counter + 1
      )
    );
  };

  const handleDecrement = () => {
    dispatch(
      actions.changeCounterAction(
        actions.COUNTER.DECREMENT_COUNTER,
        counter - 1
      )
    );
  };

  return (
    <ViewBox centered middle baseColor flex>
      <TextView white size={20} margin={20}>
        Counter: {counter}
      </TextView>

      <FilledButton width={150} title="+" onPress={handleIncrement} />
      <FilledButton width={150} title="-" onPress={handleDecrement} />
    </ViewBox>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Feed;
