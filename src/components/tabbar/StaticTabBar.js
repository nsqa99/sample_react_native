//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// create a component
const StaticTabBar = ({ tabs, tabWidth, value, navigation }) => {
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [values, setValues] = useState(
    tabs.map((tab, index) => new Animated.Value(index === 0 ? 1 : 0))
  );
  // console.log("here1");

  const onPress = (index, component) => {
    Animated.sequence([
      ...values.map((value) =>
        Animated.timing(value, {
          toValue: 0,
          duration: 5,
          useNativeDriver: true,
        })
      ),
      Animated.parallel([
        Animated.spring(values[index], {
          toValue: 1,
          friction: 13,
          useNativeDriver: true,
        }),
        Animated.spring(value, {
          toValue: -width + tabWidth * index,

          useNativeDriver: true,
        }),
      ]),
    ]).start(() => navigation.navigate(component));
  };
  return (
    <View style={styles.container}>
      {tabs.map(({ name, component }, key) => {
        // console.log("here3");
        const activeValue = values[key];
        const translateY = activeValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-30, -120],
        });
        const opacity = value.interpolate({
          inputRange: [
            -width + tabWidth * (key - 1),
            -width + tabWidth * key,
            -width + tabWidth * (key + 1),
          ],
          outputRange: [1, 0, 1],
        });
        // console.log(JSON.stringify(activeValue));
        return (
          <React.Fragment {...{ key }}>
            <Animated.View style={[styles.tab, { opacity }]}>
              <TouchableNativeFeedback
                onPress={() => {
                  onPress(key, component);
                }}>
                <Icon name={name} size={25} />
              </TouchableNativeFeedback>
            </Animated.View>
            <View
              style={{
                position: "absolute",
                width: tabWidth,
                height: tabWidth,
                left: tabWidth * key,
                bottom: -100,
                // bottom: tabWidth,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Animated.View
                style={[styles.circle, { transform: [{ translateY }] }]}>
                <Icon name={name} size={25} />
              </Animated.View>
            </View>
          </React.Fragment>
        );
      })}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  tab: {
    width: 64,
    height: 64,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
});

//make this component available to the app
export default StaticTabBar;
