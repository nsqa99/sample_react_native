//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import TextView from "../../../components/TextView";
import ViewBox from "../../../components/ViewBox";
import { IMAGE_URI } from "../../../utils/constants";
import Avatar from "./Avatar";

// create a component
const ProfileModal = ({
  sender,
  avatar,
  message,
  amount,
  isVisible,
  onBackdropPress,
}) => {
  return (
    <Modal
      backdropOpacity={0.3}
      animationInTiming={200}
      animationOutTiming={200}
      backdropTransitionInTiming={200}
      backdropTransitionOutTiming={200}
      style={{ alignItems: "center" }}
      {...{ isVisible, onBackdropPress }}>
      <ViewBox
        white
        middle
        centered
        width={300}
        height={290}
        style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Avatar style={styles.avatar} uri={IMAGE_URI} />
          <Avatar style={styles.avatar} uri={avatar} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextView style={[styles.mediumText, styles.sender]}>
            {sender || "sender"}
          </TextView>
          <TextView style={styles.mediumText}>tặng bạn </TextView>
          <TextView style={[styles.mediumText, styles.amount]}>
            {amount || "amount"} Icetea Gold
          </TextView>
        </View>
        <TextView style={styles.mediumText}>kèm lời nhắn</TextView>
        <TextView style={[styles.smallText, styles.message]}>
          {message || "message"}
        </TextView>
      </ViewBox>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  sender: {
    color: "#00B9E7",
    fontWeight: "600",
    marginRight: 10,
  },
  mediumText: {
    fontSize: 16,
  },
  smallText: {
    fontSize: 12,
  },
  amount: {
    color: "#FC6931",
  },
  message: {
    width: "80%",
    marginTop: 20,
    // marginVertical: 10,
  },
});

//make this component available to the app
export default ProfileModal;
