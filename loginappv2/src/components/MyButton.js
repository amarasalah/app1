/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const MyButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0036",
    borderRadius: 30,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontFamily: "Redressed-Regular",
  },
});
