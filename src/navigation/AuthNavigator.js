import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import LoginScreen from '../Screens/LoginScreen';

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={{ headerShown: false }} >
    <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
    <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
    <Stack.Screen name='LoginScreen' component={LoginScreen} />
  </Stack.Navigator>
  )

  export default AuthNavigator;