import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import ListingScreen from '../Screens/ListingScreen';
import ListingDetailsScreen from '../Screens/ListingDetailsScreen';

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='ListingScreen' component={ListingScreen} />
    <Stack.Screen name='ListingDetailsScreen' component={ListingDetailsScreen} />
  </Stack.Navigator>
)

export default FeedNavigator;