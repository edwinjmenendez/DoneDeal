import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListingEditScreen from '../Screens/ListingEditScreen'
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import routes from './routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={routes.FEED}
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => 
          <MaterialCommunityIcons name='home' size={size} color={color} />
      }}
    />
    <Tab.Screen
      name={routes.LISTING_EDIT}
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />,
      })}
    />
    <Tab.Screen
      name={routes.ACCOUNT}
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => 
          <MaterialCommunityIcons
            name='account'
            size={size}
            color={color} 
          />
      }}
    />
  </Tab.Navigator>
)

export default AppNavigator;