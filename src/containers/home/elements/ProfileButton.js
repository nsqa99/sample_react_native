import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ProfileButton({ title, style, icon }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.buttonDefault, style]}
      onPress={() => {
        setIsSelected(!isSelected);
      }}>
      <Icons name={icon} size={20} />
      <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonDefault: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "80%",
    marginTop: 30,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
  },

  buttonText: {
    textAlign: "center",
    fontSize: 12,
    marginHorizontal: 10,
    color: "black",
  },
});
