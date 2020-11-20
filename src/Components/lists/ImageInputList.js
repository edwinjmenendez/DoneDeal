import React, { useRef } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import ImageInput from '../ImageInput'

const ImageInputList = ({ imageURIs = [], onAddImage, onRemoveImage }) => {

  // using ref hook, you can get the reference of the instance of a component
  const scrollViewRef = useRef();
  // scrollViewRef.current <- we now have access (see docs)
  // to instances/methods of ScrollView since we defined it in our ref prop

  const uris = imageURIs.map(uri => // REMEMBER TO ALWAYS RETURN WITH MAP
    <View key={uri} style={styles.image}>
      <ImageInput 
        imageURI={uri}
        onChangeImage={() => onRemoveImage(uri)} 
      />
    </View>
  )

  return (
    // view added because scrollView takes up whole space around it (try changing bckgnd color)
    <View>
      <ScrollView
        horizontal
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
        ref={scrollViewRef}
        >
        <View style={styles.container}>
          {uris}
          <ImageInput onChangeImage={uri => onAddImage(uri)} />
        </View>
      </ScrollView>  
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
