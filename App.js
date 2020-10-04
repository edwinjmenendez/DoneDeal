import React, { useState } from 'react';
import { Platform, SafeAreaView, ScrollView, View, StyleSheet, TextInput, Text } from 'react-native';

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
import AppTextInput from './src/Components/AppTextInput';

export default function App() {

  const [firstName, setFirstName] = useState('')

  return (
    <Screen>
      <AppTextInput placeholder='Username' icon='email' />
    </Screen>
  );
}

// const styles = StyleSheet.create({
//   screen: {
//     backgroundColor: colors.primary
//   }
// })

// https://expo.io/@ejmenendez/DoneWithItPart2