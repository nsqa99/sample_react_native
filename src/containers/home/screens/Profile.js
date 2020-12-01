//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ViewBox from "../../../components/ViewBox";
import ProfileHeader from "../elements/ProfileHeader";
import ProfileBody from "../elements/ProfileBody";

// create a component
const Profile = () => {
  return (
    <ViewBox flex baseColor>
      <ProfileHeader />
      <ProfileBody />
    </ViewBox>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Profile;
