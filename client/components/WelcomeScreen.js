import React from 'react';
import { View, Image, ImageBackground, Text, SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

const WelcomeScreen = () => {
  return (
    // i guess style is needed for the imageBackground or it wont work
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={styles.container}
    >
      <SafeAreaView style={styles.logoContainer} >
        <Image
          source={require('../../assets/logo-red.png')}
          style={styles.logo}
        />
        <Text>Sell What You Dont Need</Text>
      </SafeAreaView>
      {/* tried putting a container around it but it didnt work for some reason, fix later */}
      <View style={styles.login} />
      <View style={styles.signup} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // sets image background all the way i guess
    justifyContent: 'flex-end', // for its children
    alignItems: 'center' // aligning children
    // width: '100%', dont need these i guess 
    // height: '100%',
  },
  login: {
    backgroundColor: '#fc5c65',
    height: 70,
    width: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: Platform.OS === 'android' ? StatusBar.currentHeight + 70 : 70,
    alignItems: 'center', // aligning children
  },
  logo: {
    width: 100, 
    height: 100,
  },
  signup: {
    backgroundColor: '#4ECDC4',
    height: 70,
    width: '100%',
  },
})


export default WelcomeScreen;