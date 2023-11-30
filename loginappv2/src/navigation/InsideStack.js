/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Home from '../screens/Home';


const InsideStack = createStackNavigator();



export default function StackNavigator() {

    return (
    <InsideStack.Navigator screenOptions={{headerShown:false}}  >

      <InsideStack.Screen name="Home" component={Home} />
     
    </InsideStack.Navigator>
  );
}