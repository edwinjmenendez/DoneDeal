import React from 'react';

import AppFormPicker from './src/Components/forms/AppFormPicker';
import AppPicker from './src/Components/AppPicker'
import { AppFormField } from './src/Components/forms';
import Screen from './src/Components/Screen';
import RegisterScreen from './src/Screens/RegisterScreen'
import ListingEditScreen from './src/Screens/ListingEditScreen';

export default function App() {
  return (
    <Screen>
      <RegisterScreen />
      {/* <AppPicker /> */}
    </Screen>
  );
}

// https://expo.io/@ejmenendez/DoneWithItPart2