import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import ViewImageScreen from './src/Screens/ViewImageScreen'
import Screen from './src/Components/Screen';
import ImageInput from './src/Components/ImageInput';
import ImageInputList from './src/Components/lists/ImageInputList';
import FormImagePicker from './src/Components/forms/FormImagePicker';
import ListingEditScreen from './src/Screens/ListingEditScreen';

export default function App() {

  return (
    <ListingEditScreen />
  );
}

// https://expo.io/@ejmenendez/DoneWithItPart2