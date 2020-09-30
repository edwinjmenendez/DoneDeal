import React from 'react';
import { Platform, SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';

import WelcomeScreen from './src/Screens/WelcomeScreen';
import ViewImageScreen from './src/Screens/ViewImageScreen.js';

import Card from './src/Components/Card'
import AppText from './src/Components/AppText/AppText'
import ListingDetailsScreen from './src/Screens/ListingDetailsScreen';
import MessageScreen from './src/Screens/MessageScreen';
import MyAccountScreen from './src/Screens/MyAccountScreen';
import Screen from './src/Components/Screen';
import colors from './src/config/colors';
import Icon from './src/Components/Icon';
import ListItem from './src/Components/ListItem';
import ListingScreen from './src/Screens/ListingScreen';

export default function App() {
  return (
    <ListingScreen />
  );
}

// const styles = StyleSheet.create({
//   screen: {
//     backgroundColor: colors.primary
//   }
// })

// https://expo.io/@ejmenendez/DoneWithItPart2