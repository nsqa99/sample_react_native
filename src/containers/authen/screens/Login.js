import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Heading from "../../../components/Heading";
import FilledButton from "../../../components/FilledButton";
import Label from "../../../components/Label";
import Input from "../../../components/Input";

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Heading text="Login" />
      <View style={styles.content}>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Label title="Username" />
          <Input onChangeText={(text) => setUsername(text)} />
          <Label title="Password" />
          <Input onChangeText={(text) => setPassword(text)} />
        </View>
        <FilledButton
          title="login"
          onPress={() => navigation.navigate("Home", { username: username })}
        />
      </View>
      <FilledButton
        title="don't have an account? create one"
        style={styles.registerBtn}
        onPress={() => navigation.navigate("Registration")}
      />
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
});

export default Login;
