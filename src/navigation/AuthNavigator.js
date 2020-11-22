import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import LoginScreen from '../Screens/LoginScreen';

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator initialRouteName='WelcomeScreen' >
    <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name='Register' component={RegisterScreen} />
    <Stack.Screen name='Login' component={LoginScreen} />
  </Stack.Navigator>
  )

  export default AuthNavigator;