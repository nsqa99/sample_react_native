//import liraries
import React, { Component } from "react";
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
import IconButton from "./IconButton";
import Icon from "react-native-vector-icons/FontAwesome";

// create a component
const StaticTabBar = (props) => {
  const { width } = Dimensions.get("window");
  const { tabs, tabWidth, value } = props;

  const values = tabs.map(
    (tab, index) => new Animated.Value(index === 0 ? 1 : 0)
  );

  const onPress = (index) => {
    Animated.sequence([
      ...values.map((value) =>
        Animated.timing(value, {
          toValue: 0,
          duration: 50,
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
    ]).start();
  };

  return (
    <View style={styles.container}>
      {tabs.map(({ name }, key) => {
        const activeValue = values[key];
        const translateY = activeValue.interpolate({
          inputRange: [0, 1],
          outputRange: [tabWidth, 0],
        });
        const opacity = value.interpolate({
          inputRange: [
            -width + tabWidth * (key - 1),
            -width + tabWidth * key,
            -width + tabWidth * (key + 1),
          ],
          outputRange: [1, 0, 1],
        });
        return (
          <React.Fragment {...{ key }}>
            <Animated.View style={[styles.tab, { opacity }]}>
              <TouchableNativeFeedback onPress={() => onPress(key)}>
                <Icon name={name} size={25} />
              </TouchableNativeFeedback>
            </Animated.View>
            <View
              style={{
                position: "absolute",
                width: tabWidth,
                height: tabWidth,
                left: tabWidth * key,
                bottom: tabWidth / 4,
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
