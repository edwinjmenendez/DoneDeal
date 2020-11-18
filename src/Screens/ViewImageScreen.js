import React from "react";
import { View, SafeAreaView, StyleSheet, Image, Platform, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors.js'

const ViewImageScreen = () => {
  return (
   <SafeAreaView style={styles.background} >
     <View style={styles.leftBox}>
       <MaterialCommunityIcons name='close' color='white' size={35} />
     </View>
     <View style={styles.rightBox}>
       <MaterialCommunityIcons name='trash-can-outline' color='white' size={35} />
     </View>
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
    position: 'absolute',
    top: 40,
    left: 30
  },
  rightBox: {
    position: 'absolute',
    top: 40,
    right: 30
  },
})

export default ViewImageScreen;