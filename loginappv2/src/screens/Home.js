/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import React from "react";
import auth from "@react-native-firebase/auth";

const Home = () => {
  const signOut = async () => {
    try {

      await auth()
        .signOut()
        .then(() => Alert.alert("User signed out!"));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Pressable onPress={signOut}>
        <Text>SignOut</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
