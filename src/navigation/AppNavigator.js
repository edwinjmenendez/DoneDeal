import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListingEditScreen from '../Screens/ListingEditScreen'
import MyAccountScreen from '../Screens/MyAccountScreen'
import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='Feed' component={FeedNavigator} />
    <Tab.Screen name='ListingEdit' component={ListingEditScreen} />
    <Tab.Screen name='Account' component={MyAccountScreen} />
  </Tab.Navigator>
)

export default AppNavigator;