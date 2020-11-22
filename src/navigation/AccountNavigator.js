import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import MyAccountScreen from '../Screens/MyAccountScreen';
import MessageScreen from '../Screens/MessageScreen';

const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Account' component={MyAccountScreen} />
    <Stack.Screen name='Messages' component={MessageScreen} />
  </Stack.Navigator>
)

export default AccountNavigator;