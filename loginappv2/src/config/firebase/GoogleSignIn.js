import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

async function configureGoogleSignIn() {
  console.log('signed in');
  try {
    GoogleSignin.configure({
      webClientId:
        '41822493501-9rbqdqibmv485l1bdefveu41nnudit4i.apps.googleusercontent.com',

      offlineAccess: false,
    });
    console.log('No error here==================');
  } catch (err) {
    console.log(`err =====> ${err}`);
  }
}

async function onGoogleButtonPress() {
  try {
    configureGoogleSignIn();

    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.error('Google Sign-In Error:', error);
  }
}

export default onGoogleButtonPress;
