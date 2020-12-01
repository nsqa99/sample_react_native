//import liraries
import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { MyColors } from "../../../styles/theme";
import ViewBox from "../../../components/ViewBox";
import TextView from "../../../components/TextView";

import { useSelector, useDispatch } from "react-redux";
import { fetchTodoAction } from "../../../redux/actions/todos";

const Item = ({ title }) => (
  <View style={styles.item}>
    <TextView color="black" size={20}>
      {title}
    </TextView>
  </View>
);

// create a component
const Notifications = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  //console.log(todos);

  const renderItem = ({ item }) => <Item title={item.title} />;

  useEffect(() => {
    dispatch(fetchTodoAction());
  }, []);

  return (
    <ViewBox flex middle centered baseColor>
      <TextView white size={30}>
        Todos
      </TextView>

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </ViewBox>
  );
};

// define your styles
const styles = StyleSheet.create({
  item: {
    width: "100%",
    height: 50,
    textAlign: "center",
    marginVertical: 20,
    backgroundColor: "white",
  },
});

//make this component available to the app
export default Notifications;
