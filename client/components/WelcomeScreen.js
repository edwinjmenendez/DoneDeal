import React from 'react';
import { View, Image, ImageBackground, Text, SafeAreaView, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
  return (
    // i guess style is needed for the imageBackground or it wont work
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={styles.container}
    >
      <SafeAreaView style={styles.textLogo} >
        <Image
          source={require('../../assets/logo-red.png')}
          style={styles.logo}
        />
        <Text>Sell What You Dont Need</Text>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    height: '100%', 
  },
  textLogo: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logo: {
    width: 150, 
    height: 150,
  },
})


export default WelcomeScreen;