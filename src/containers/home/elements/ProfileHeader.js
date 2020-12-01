//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IMAGE_URI } from "../../../utils/constants";
import TextView from "../../../components/TextView";
import Avatar from "./Avatar";
import ProfileButton from "./ProfileButton";

const Icons = {
  button1: {
    icon: "qrcode-scan",
    title: "QR",
  },
  button2: {
    icon: "gold",
    title: "Chuyển gold",
  },
};

// create a component
const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
        }}>
        <Avatar uri={IMAGE_URI} style={styles.avatar} />

        <View style={styles.info}>
          <View>
            <TextView lineHeight={26} size={20} style={styles.bigLabel}>
              Quang Anh
            </TextView>
            <TextView size={12} style={styles.smallLabel}>
              IceTea
            </TextView>
          </View>

          <TextView lineHeight={26} size={20} style={styles.bigLabel}>
            1000
          </TextView>
        </View>
      </View>
      <View style={styles.buttons}>
        <ProfileButton
          style={styles.button}
          title={Icons.button1.title}
          icon={Icons.button1.icon}
        />
        <ProfileButton
          style={styles.button}
          title={Icons.button2.title}
          icon={Icons.button2.icon}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 2 / 7,
    position: "absolute",
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    top: 0,
  },
  avatar: {
    marginLeft: 10,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
    marginHorizontal: 10,
  },
  bigLabel: {
    fontWeight: "700",
  },
  smallLabel: {
    fontWeight: "200",
  },
  buttons: {
    flexDirection: "row",
    height: "50%",
    marginHorizontal: 20,
  },

  button: {
    width: 150,
    height: 40,
    backgroundColor: "#00B9E7",
    marginHorizontal: 5,

    marginBottom: 10,
  },
});

//make this component available to the app
export default ProfileHeader;
