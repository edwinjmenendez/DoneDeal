import React from "react";
import { View, SafeAreaView, StyleSheet, Image, Platform, StatusBar } from 'react-native';

import colors from '../config/colors.js'

const ViewImageScreen = () => {
  return (
   <SafeAreaView style={styles.background} >
     <View style={styles.leftBox} />
     <View style={styles.rightBox} />
     <Image
      source={require('../assets/chair.jpg')}
      style={styles.image}
    />
   </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // resizes image to fit on page
  },
  leftBox: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    position: 'absolute',
    top: Platform.OS === 'android' ? StatusBar.currentHeight + 40 : 40,
    left: 30
  },
  rightBox: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    position: 'absolute',
    top: Platform.OS === 'android' ? StatusBar.currentHeight + 40 : 40,
    right: 30
  },
})

export default ViewImageScreen;