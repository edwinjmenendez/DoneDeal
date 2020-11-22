import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import ListingScreen from '../Screens/ListingScreen';
import ListingDetailsScreen from '../Screens/ListingDetailsScreen';

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator mode='modal' >
    <Stack.Screen name='Listings' component={ListingScreen} />
    <Stack.Screen name='ListingDetails' component={ListingDetailsScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
)

export default FeedNavigator;