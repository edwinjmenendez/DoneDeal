import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ImageInput from '../ImageInput'

const ImageInputList = ({ imageURIs = [], onAddImage, onRemoveImage }) => {
  // whenever an image is selected we want to call the ImageInput again

  const uris = imageURIs.map(uri => // REMEMBER TO ALWAYS RETURN WITH MAP
    <View key={uri} style={styles.image}>
      <ImageInput 
        imageURI={uri}
        onChangeImage={() => onRemoveImage(uri)} 
      />
    </View>
  )

  return (
    <View style={styles.container}>
      {uris}
      <ImageInput onChangeImage={uri => onAddImage(uri)} />
    </View>
  )
}

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  }
})
