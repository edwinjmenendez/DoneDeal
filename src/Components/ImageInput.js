import React, { useEffect } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';

import colors from '../config/colors'


const ImageInput = ({ imageURI, onChangeImage }) => {

  // reusable component; takes care of user permission
  useEffect(() => {
    requestPermission(); 
  }, []) // passing in empty arr equivalent to CompDidMount; only updates once
  
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      alert('You need to enable permission to access library')
    }
  };

  // handlePress will allow the user to select an image from phone library
  const handlePress = () => {
    // if no image exists user has option to select image from gallery
    if (!imageURI) selectImage();
    else {
      // if image exists; user has option to delete image
      Alert.alert(
        'Delete', 
        'Are you sure you want to delete this image?' , 
        [
          { text: "No", style: "cancel" },
          { text: "Yes", onPress: () => onChangeImage(null) } 
        ]
      )
    }
  }

  const selectImage = async () => {
    try {
      let image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!image.cancelled) {
        onChangeImage(image.uri)
      }
    } catch (error) {
      console.log('Error reading an image: ', error);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress} >
      <View style={styles.container}>
        {!imageURI && <MaterialCommunityIcons name='camera' size={40} color={colors.medium} />}
        {imageURI && <Image style={styles.image} source={{ uri: imageURI }} />}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ImageInput

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden', // must be in container and not image itself
    width: 100,
  },
  image: {
    height: '100%',
    width: '100%',
  }
})
