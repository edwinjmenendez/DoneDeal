import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import WelcomeScreen from './client/components/WelcomeScreen.js'

export default function App() {
  return (
    // no view component needed to return this
    <WelcomeScreen />
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center', 
//     // justifyContent: 'center',
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });

// https://expo.io/@ejmenendez/DoneWithItPart2