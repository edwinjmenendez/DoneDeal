import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import ViewImageScreen from './src/Screens/ViewImageScreen'
import Screen from './src/Components/Screen';
import ImageInput from './src/Components/ImageInput';
import ImageInputList from './src/Components/lists/ImageInputList';

export default function App() {

  const [imageURIs, setImageURIs] = useState([]);
  
  const handleAdd = uri => {
    setImageURIs([...imageURIs, uri])
  }

  const handleRemove = uri => {
    setImageURIs(imageURIs.filter(imageURI => imageURI !== uri))
  }

  return (
    <Screen>
      <ImageInputList
        imageURIs={imageURIs}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
     />
    </Screen>
  );
}

// https://expo.io/@ejmenendez/DoneWithItPart2