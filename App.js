import React from 'react';
import { Platform, SafeAreaView, ScrollView, View } from 'react-native';

import WelcomeScreen from './src/Screens/WelcomeScreen';
import ViewImageScreen from './src/Screens/ViewImageScreen.js';

import Card from './src/Components/Card'
import AppText from './src/Components/AppText/AppText'
import ListingDetailsScreen from './src/Screens/ListingDetailsScreen';
import MessageScreen from './src/Screens/MessageScreen';

export default function App() {
  return (
      <MessageScreen />
  );
}

// https://expo.io/@ejmenendez/DoneWithItPart2