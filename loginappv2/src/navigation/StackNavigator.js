/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Home from '../screens/Home';
import navigation from "../navigation/StackNavigator"


const Stack = createStackNavigator();



export default function StackNavigator() {

    return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='SignUp'>
      <Stack.Screen name="SignUp" component={SignUp}  />
      <Stack.Screen name="Login" component={Login} />
     
    </Stack.Navigator>
  );
}
