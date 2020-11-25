import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Heading from "../../../components/Heading";
import FilledButton from "../../../components/FilledButton";
import Label from "../../../components/Label";
import Input from "../../../components/Input";
import IconButton from "../../../components/IconButton";

function Registration({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <IconButton
        name="times-circle"
        size={35}
        style={styles.closeBtn}
        onPress={() => navigation.popToTop()}
      />
      <Heading text="Registration" />

      <View style={styles.content}>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Label title="Username" />
          <Input onChangeText={(text) => setUsername(text)} />
          <Label title="Password" />
          <Input onChangeText={(text) => setPassword(text)} />
        </View>
        <FilledButton title="register" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  registerBtn: {
    backgroundColor: "white",
    width: "80%",
    marginTop: 0,
    padding: 10,
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    // backgroundColor: 'yellow',
  },
  closeBtn: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default Registration;
