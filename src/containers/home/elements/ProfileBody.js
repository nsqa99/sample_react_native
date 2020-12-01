import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ViewBox from "../../../components/ViewBox";
import TextView from "../../../components/TextView";
import ProfileButton from "./ProfileButton";
import { IMAGE_URI } from "../../../utils/constants";
import Avatar from "./Avatar";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import ProfileModal from "./ProfileModal";

const Datas = [
  {
    id: 1,
    sender: "Loremispum",
    avatar: IMAGE_URI,
    amount: 100,
    isAdd: true,
    message:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    time: "5 phút trước",
  },
  {
    id: 2,
    sender: "Loremispum",
    avatar: IMAGE_URI,
    amount: 50,
    isAdd: false,
    message:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    time: "5 phút trước",
  },
  {
    id: 3,
    sender: "Loremispum",
    avatar: IMAGE_URI,
    amount: 100,
    isAdd: true,
    message:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    time: "5 phút trước",
  },
  {
    id: 4,
    sender: "Loremispum",
    avatar: IMAGE_URI,
    amount: 100,
    isAdd: true,
    message:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    time: "5 phút trước",
  },
  {
    id: 5,
    sender: "Loremispum",
    avatar: IMAGE_URI,
    amount: 100,
    isAdd: true,
    message:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    time: "5 phút trước",
  },
  {
    id: 6,
    sender: "Loremispum",
    avatar: IMAGE_URI,
    amount: 100,
    isAdd: true,
    message:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    time: "5 phút trước",
  },
  {
    id: 7,
    sender: "Loremispum",
    avatar: IMAGE_URI,
    amount: 100,
    isAdd: true,
    message:
      "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
    time: "5 phút trước",
  },
];

const Compliment = ({
  onPress,
  sender,
  avatar,
  amount,
  isAdd,
  message,
  time,
}) => {
  //   console.log(amount);

  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <View style={styles.item}>
        <Avatar uri={avatar} style={styles.avatar} />
        <View style={styles.content}>
          <View style={styles.firstSection}>
            <TextView style={[styles.text, styles.smallText]}>
              {"Từ: "}
              <TextView white>{sender}</TextView>
            </TextView>

            <TextView style={[isAdd ? styles.redText : styles.mediumText]}>
              {isAdd ? "+" : "-"}
              {amount}
            </TextView>
          </View>
          <View>
            <TextView style={[styles.text, styles.mediumText]}>
              {message}
            </TextView>
          </View>
          <TextView style={[styles.text, styles.smallText]}>
            {"(" + time + ")"}
          </TextView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default function ProfileBody() {
  const [isVisible, setIsVisible] = useState(false);
  const [complimentId, setComplimentId] = useState(0);
  const [info, setInfo] = useState({});
  const { sender, avatar, amount, message } = info;

  useEffect(() => {
    const { sender, avatar, amount, message } = Datas[complimentId];
    setInfo({ sender, avatar, amount, message });
  }, [complimentId]);

  return (
    <ViewBox middle marginTop={140} style={styles.container}>
      <View style={styles.buttons}>
        <ProfileButton style={styles.button} title="Cá nhân" />
        <ProfileButton style={styles.button} title="Công ty" />
      </View>

      <ProfileModal
        onBackdropPress={() => {
          setIsVisible(false);
        }}
        {...{
          sender,
          avatar,
          amount,
          message,
          isVisible,
        }}
      />

      <FlatList
        data={Datas}
        renderItem={({ item }) => {
          const { id, sender, avatar, amount, isAdd, message, time } = item;
          return (
            <Compliment
              onPress={() => {
                setComplimentId(id - 1);
                setIsVisible(true);
              }}
              {...{ sender, avatar, amount, isAdd, message, time }}
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </ViewBox>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "70%",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    width: 150,
    height: 40,
    borderRadius: 10,
  },
  item: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  firstSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  text: {
    color: "white",
  },
  redText: {
    color: "tomato",
  },
  list: {
    width: "100%",
    marginVertical: 10,
  },
  avatar: {
    borderRadius: 50,
    marginHorizontal: 10,
    flex: 1 / 7,
  },
  content: {
    flex: 6 / 7,
  },
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 14,
  },
});
