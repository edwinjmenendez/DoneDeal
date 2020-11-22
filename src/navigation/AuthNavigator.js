import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import LoginScreen from '../Screens/LoginScreen';
import routes from './routes';

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator initialRouteName='WelcomeScreen' >
    <Stack.Screen name={routes.WELCOME} component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
    <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
  </Stack.Navigator>
  )

  export default AuthNavigator;