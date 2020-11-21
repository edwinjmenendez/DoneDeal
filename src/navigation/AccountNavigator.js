import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import MyAccountScreen from '../Screens/MyAccountScreen';
import MessageScreen from '../Screens/MessageScreen';

const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='MyAccountScreen' component={MyAccountScreen} />
    <Stack.Screen name='MessageScreen' component={MessageScreen} />
  </Stack.Navigator>
)

export default AccountNavigator;