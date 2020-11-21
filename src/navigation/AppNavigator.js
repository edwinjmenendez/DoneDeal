import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListingEditScreen from '../Screens/ListingEditScreen'
import ListingScreen from '../Screens/ListingScreen'
import MyAccountScreen from '../Screens/MyAccountScreen'

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='ListingScreen' component={ListingScreen} />
    <Tab.Screen name='ListingEditScreen' component={ListingEditScreen} />
    <Tab.Screen name='MyAccountScreen' component={MyAccountScreen} />
  </Tab.Navigator>
)

export default AppNavigator;