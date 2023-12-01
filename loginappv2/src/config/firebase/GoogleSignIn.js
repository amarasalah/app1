import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

// Initialize Google Sign-In

GoogleSignin.configure({
  webClientId:
    '41822493501-9rbqdqibmv485l1bdefveu41nnudit4i.apps.googleusercontent.com',
  offlineAccess: false,
});

async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
export default onGoogleButtonPress;
