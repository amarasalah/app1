/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Platform,
  Alert,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";
import SocialMedia from "../components/SocialMedia";
import auth from "@react-native-firebase/auth";

const SignUp = ({navigation}) => {
  const [email, SetEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();




  const signUpTestFn = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert(`User ${email} has been created`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        style={styles.ImageBackground}
      >
        <Image
          source={require("../assets/food/food.png")}
          style={styles.image}
        />

        <Text style={styles.title}>Fatmore</Text>
        <View style={styles.inputContainer}>
          <MyTextInput
            placeholder="Enter E-mail or Username"
            value={email}
            onChangeText={(text) => SetEmail(text)}
          />

          <MyTextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <MyTextInput placeholder="Confirm Password" secureTextEntry />
          <Text style={styles.textQuest}>You Already Have An Account?</Text>
          <Pressable onPress={()=>navigation.navigate("Login")}>
            <Text>Login</Text>
          </Pressable>
          <MyButton title={"Sign Up"} onPress={signUpTestFn} />
          <Text style={styles.textSocial}> OR </Text>
          <SocialMedia></SocialMedia>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground: {
    height: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 90,
    resizeMode: "stretch",
    position: "absolute",
    right: 20,
    top: Platform.OS == "android" ? 20 : 50,
  },
  title: {
    fontSize: 40,
    color: "white",
    marginTop: Platform.OS == "android" ? 60 : 110,
    fontFamily: "Audiowide-Regular",
  },
  inputContainer: {
    height: 450,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    paddingHorizontal: 20,
  },
  textQuest: {
    alignSelf: "flex-end",
    marginRight: 10,
    marginBottom: 10,
    color: "black",
    fontFamily: "Langar-Regular",
  },
  textSocial: {
    fontSize: 20,
    color: "gray",
    marginVertical: 20,
    fontFamily: "Audiowide-Regular",
  },
});
