import React from "react";

import { View, StyleSheet } from "react-native";
import { ms } from "react-native-size-matters";

import { MyColors } from "../styles/theme";

/*
*
Define props
block : flex view
margin
padding
width
height
border
borderWidth
borderColor
color => is background color of view
.... your can custom if you want
*/

const ViewBox = ({
  flex,
  wrap,
  row,
  margin,
  marginVertical,
  marginHorizontal,
  marginTop,
  marginBottom,
  padding,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  width,
  height,
  border,
  borderWidth,
  borderColor,
  centered,
  between,
  middle,
  color,
  baseColor,
  white,
  style,
  direction,
  children,
  justifyContent,
  borderRadius,
  shadow,
  hrt,
  hrb,
  ...props
}) => {
  const styleComponent = [
    flex && styles.flex,
    wrap && { flexWrap: "wrap" },
    row && { flexDirection: "row" },
    direction && { flexDirection: direction },
    margin && { margin: ms(margin) },
    marginVertical && { marginVertical: ms(marginVertical) },
    marginHorizontal && { marginHorizontal: ms(marginHorizontal) },
    marginTop && { marginTop: ms(marginTop) },
    marginBottom && { marginBottom: ms(marginBottom) },
    padding && { padding: ms(padding) },
    paddingVertical && { paddingVertical: ms(paddingVertical) },
    paddingHorizontal && { paddingHorizontal: ms(paddingHorizontal) },
    paddingTop && { paddingTop: ms(paddingTop) },
    paddingBottom && { paddingBottom: ms(paddingBottom) },
    paddingLeft && { paddingLeft: ms(paddingLeft) },
    paddingRight && { paddingRight: ms(paddingRight) },
    width && { width: ms(width) },
    height && { height: ms(height) },
    border && { borderWidth: 1, borderColor: "gray" },
    borderWidth && { borderWidth },
    borderColor && { borderColor },
    color && { backgroundColor: color },
    baseColor && { backgroundColor: MyColors.baseColor },
    white && { backgroundColor: "white" },
    centered && { justifyContent: "center" },
    between && { justifyContent: "space-between" },
    justifyContent && { justifyContent },
    middle && { alignItems: "center" },
    borderRadius && { borderRadius },
    shadow && {
      shadowOpacity: 0.22,
      shadowRadius: 5,
      shadowColor: "gray",
      shadowOffset: { height: 1, width: 1 },
      elevation: 5,
    },
    style,
  ];
  return (
    <View style={styleComponent} {...props}>
      {children}
    </View>
  );
};

export default ViewBox;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
