import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

const signInWithEmailAndPassword = (email, password) => {
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
export default signInWithEmailAndPassword;
