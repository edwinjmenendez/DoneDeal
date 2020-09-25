import React from "react";
import { View, SafeAreaView, StyleSheet, Image } from 'react-native';

const ViewImageScreen = () => {
  return (
   <SafeAreaView style={styles.background} >
     <View style={styles.leftBox} />
     <View style={styles.rightBox} />
     <Image
      source={require('../../assets/chair.jpg')}
      style={styles.image}
    />
   </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftBox: {
    backgroundColor: '#fc5c65',
    width: 50,
    height: 50,
  },
  rightBox: {
    backgroundColor: '#4ECDC4',
    width: 50,
    height: 50
  },
  image: {
    width: 400,
    height: 700,
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
  },
})

export default ViewImageScreen;