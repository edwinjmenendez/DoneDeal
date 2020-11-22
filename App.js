import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import navigationTheme from './src/navigation/navigationTheme';

export default function App() {
    // gives us access to the Screen/Nav keys which should be wrapped in a Tab NavContainer
    const Tab = createBottomTabNavigator();
    const TabNavigator = () => (
      // screens represent a tab
      <Tab.Navigator tabBarOptions={{ 
        activeBackgroundColor: 'gold',
        activeTintColor: 'purple',
        inactiveBackgroundColor: '#eee',
        inactiveTintColor: 'black',
        safeAreaInsets: {
          bottom: 0,
        }
        }}
      >
        <Tab.Screen name='Tweets'component={StackNavigator} />
        <Tab.Screen name='Account' component={MyAccountScreen} />
      </Tab.Navigator>
    )

  return (
    // navContainer ONLY takes ONE navigator with screen components
    <NavigationContainer theme={navigationTheme} >
      <AppNavigator />
    </NavigationContainer>
  );
}

// https://expo.io/@ejmenendez/DoneWithItPart2