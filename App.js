import React from 'react';

import AppFormPicker from './src/Components/forms/AppFormPicker';
import AppPicker from './src/Components/AppPicker'
import { AppFormField } from './src/Components/forms';
import Screen from './src/Components/Screen';
import RegisterScreen from './src/Screens/RegisterScreen'
import ListingEditScreen from './src/Screens/ListingEditScreen';
import ListItem from './src/Components/lists/ListItem';
import MessageScreen from './src/Screens/MessageScreen';
import Card from './src/Components/Card'
import ListingScreen from './src/Screens/ListingScreen';

export default function App() {
  return (
    <Screen>
      <ListingEditScreen />
      {/* <AppPicker /> */}
    </Screen>
  );
}

// https://expo.io/@ejmenendez/DoneWithItPart2