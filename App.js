import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
// bout to render an image

// console.log(require('./assets/icon.png')) // returns a number that is a reference to that image

  return (
    <SafeAreaView style={styles.container}>
      <Text> Beyond Burger </Text>
      {/* need to use require('path') the image for local image; 
          for net images you need to pass an obj in with key: uri, width, height
          there are blurRadius prop... LOOK AT DOCS FOR IMAGES */}
      <Image
        source={{
          uri: 'https://picsum.photos/200/300',
          width: 200,
          height: 300,
        }} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
});
