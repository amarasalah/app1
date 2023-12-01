/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Platform,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';
import SocialMedia from '../components/SocialMedia';
import onGoogleButtonPress from '../config/firebase/GoogleSignIn';
import signInWithEmailAndPassword from '../config/firebase/EmailAndPassword';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    onGoogleButtonPress();
  };
  const handleEmailAndPassword = () => {
    signInWithEmailAndPassword(email, password);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.imageBackground}>
        <Image
          source={require('../assets/food/food.png')}
          style={styles.image}
        />

        <Text style={styles.title}>Fatmore</Text>
        <View style={styles.inputContainer}>
          <MyTextInput
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Enter E-mail or Username"
          />
          <MyTextInput
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            secureTextEntry
          />
          <Text style={styles.textQuest}>Don't you have an account yet?</Text>
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Text>Sign Up</Text>
          </Pressable>

          <MyButton title={'Login'} onPress={handleEmailAndPassword} />
          <Text style={styles.textSocial}>OR</Text>
          <SocialMedia onPress={handlePress} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 90,
    resizeMode: 'stretch',
    position: 'absolute',
    right: 20,
    top: Platform.OS === 'android' ? 20 : 50,
  },
  title: {
    fontSize: 40,
    color: 'white',
    marginTop: Platform.OS === 'android' ? 60 : 110,
    fontFamily: 'Audiowide-Regular',
  },
  inputContainer: {
    height: 450,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  textQuest: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
    color: 'black',
    fontFamily: 'Langar-Regular',
  },
  textSocial: {
    fontSize: 20,
    color: 'gray',
    marginVertical: 20,
    fontFamily: 'Audiowide-Regular',
  },
});
