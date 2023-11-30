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
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';
import SocialMedia from '../components/SocialMedia';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Initialize Google Sign-In
    GoogleSignin.configure({
      webClientId: 'YOUR_WEB_CLIENT_ID',
    });
  }, []);

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(
        userInfo.idToken,
      );
      await auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Google sign-in cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Google sign-in in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Google play services not available');
      } else {
        console.error('Google sign-in error:', error);
      }
    }
  };

  const signInWithEmailAndPassword = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User account signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        } else {
          console.error(error);
        }
      });
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

          <MyButton title={'Login'} onPress={signInWithEmailAndPassword} />
          <Text style={styles.textSocial}>OR</Text>
          <SocialMedia onGoogleButtonPress={signInWithGoogle} />
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
