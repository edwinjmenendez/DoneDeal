import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import navigationTheme from './src/navigation/navigationTheme';

export default function App() {
  return (
    // navContainer ONLY takes ONE navigator with screen components
    <NavigationContainer theme={navigationTheme} >
      <AuthNavigator />
    </NavigationContainer>
  );
}

// https://expo.io/@ejmenendez/DoneWithItPart2