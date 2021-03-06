//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Animated } from "react-native";
import * as shape from "d3-shape";
import Svg, { Path } from "react-native-svg";
import StaticTabBar from "./StaticTabBar";
import { MyColors } from "../../styles/theme";
import ViewBox from "../ViewBox";

const tabs = [
  { name: "list-ul", component: "Feed" },
  { name: "envelope-o", component: "Inbox" },
  { name: "bell-o", component: "Noti" },
  { name: "comment-o", component: "Message" },
  { name: "user-o", component: "Profile" },
];

const height = 64;
const { width } = Dimensions.get("window");
console.log(width);
const tabWidth = width / 5;

const value = new Animated.Value(-width);

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const left = shape
  .line()
  .x((d) => d.x)
  .y((d) => d.y)([
  { x: 0, y: 0 },
  { x: width - 5, y: 0 },
]);

const right = shape
  .line()
  .x((d) => d.x)
  .y((d) => d.y)([
  { x: width + tabWidth + 5, y: 0 },
  { x: width * 2, y: 0 },
  { x: width * 2, y: height },
  { x: 0, y: height },
  { x: 0, y: 0 },
]);
const center = shape
  .line()
  .x((d) => d.x)
  .y((d) => d.y)
  .curve(shape.curveBasis)([
  { x: width - 5, y: 0 },
  { x: width, y: 1 },
  { x: width + 3, y: 3 },
  { x: width + 5, y: 5 },
  { x: width + 10, y: 10 },
  { x: width + 15, y: height / 3 },
  { x: width + 25, y: height / 2 },
  { x: width + tabWidth - 25, y: height / 2 },
  { x: width + tabWidth - 15, y: height / 3 },
  { x: width + tabWidth - 10, y: 10 },
  { x: width + tabWidth - 5, y: 5 },
  { x: width + tabWidth - 3, y: 3 },
  { x: width + tabWidth, y: 1 },
  { x: width + tabWidth + 5, y: 0 },
]);

const d = `${left} ${center} ${right}`;

// create a component
const TabBar = ({ navigation }) => {
  return (
    <ViewBox baseColor {...{ width, height }}>
      <AnimatedSvg
        height={height}
        width={width * 2}
        style={{ transform: [{ translateX: value }] }}>
        <Path d={d} fill="white" />
      </AnimatedSvg>
      <View style={StyleSheet.absoluteFill}>
        <StaticTabBar {...{ navigation, tabs, value, tabWidth }} />
      </View>
    </ViewBox>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default TabBar;
