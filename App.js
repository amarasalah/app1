/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNavigator from './src/navigation/StackNavigator';
import auth from '@react-native-firebase/auth';
import InsideStack from './src/navigation/InsideStack';

const Stack = createNativeStackNavigator();
import {FacebookSDK} from 'react-native-fbsdk-next';

export default App;

const styles = StyleSheet.create({});

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  return (
    <NavigationContainer>
      {!user ? <StackNavigator /> : <InsideStack />}
    </NavigationContainer>
  );
}
