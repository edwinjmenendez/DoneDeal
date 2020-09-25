import React from 'react';
import { View, Image, ImageBackground, Text, SafeAreaView, StyleSheet, SafeAreaViewComponent } from 'react-native';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={{width: '100%', height: '100%'}}
    >
      <SafeAreaView>
        <Image source={require('../../assets/logo-red.png')} />
        <Text>Hello momm</Text>
      </SafeAreaView>
    </ImageBackground>
  )
}



export default WelcomeScreen;