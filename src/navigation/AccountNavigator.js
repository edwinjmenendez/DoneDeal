import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import MyAccountScreen from '../Screens/MyAccountScreen';
import MessageScreen from '../Screens/MessageScreen';
import routes from './routes';

const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.ACCOUNT} component={MyAccountScreen} />
    <Stack.Screen name={routes.MESSAGES} component={MessageScreen} />
  </Stack.Navigator>
)

export default AccountNavigator;