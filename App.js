import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import ViewImageScreen from './src/Screens/ViewImageScreen'
import Screen from './src/Components/Screen';
import { Text, View } from 'react-native';

export default function App() {
  const requestPermission = async () => {
    Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    console.log(granted)
    if (!granted) {
      alert('You need to enable permission to access library')
    }
  };

  useEffect(() => {
    requestPermission();
  }, []) // passing in empty arr equivalent to CompDidMount; only updates once
  
  return (
    <Screen>
      <Text>Hello</Text>
    </Screen>
  );
}

// https://expo.io/@ejmenendez/DoneWithItPart2