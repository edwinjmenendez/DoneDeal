import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import ViewImageScreen from './src/Screens/ViewImageScreen'
import Screen from './src/Components/Screen';
import { Button, Image, Text, View } from 'react-native';
import ImageInput from './src/Components/ImageInput';

export default function App() {

  const [imageURI, setImageURI] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      alert('You need to enable permission to access library')
    }
  };

  const selectImage = async () => {
    try {
      let image = await ImagePicker.launchImageLibraryAsync();
      if (!image.cancelled) {
        setImageURI(image.uri)
      }
    } catch (error) {
      console.log('Error reading an image: ', error);
    }
  }

  useEffect(() => {
    requestPermission();
  }, []) // passing in empty arr equivalent to CompDidMount; only updates once
  
  return (
    <Screen>
      <ImageInput imageURI={imageURI} onChangeImage={uri => setImageURI(uri)} />
    </Screen>
  );
}

// https://expo.io/@ejmenendez/DoneWithItPart2