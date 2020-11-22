import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, ImageBackground, Text, SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

import AppButton from '../Components/AppButton';
import routes from '../navigation/routes';

const WelcomeScreen = () => {
  // only Stack.Screens have access to navigation prop; but if you use navHook; you'll have access to that prop
  const navigation = useNavigation();

  return (
    // i guess style is needed for the imageBackground or it wont work
    <ImageBackground
      blurRadius={10}
      source={require('../assets/background.jpg')}
      style={styles.container}
    >
      <SafeAreaView style={styles.logoContainer} >
        <Image
          source={require('../assets/logo-red.png')}
          style={styles.logo}
        />
        <Text style={styles.tagline} >Sell What You Dont Need</Text>
      </SafeAreaView>
      <View style={styles.buttonContainer}>
        <AppButton title={'login'} onPress={() => navigation.navigate(routes.LOGIN)} />
        <AppButton title={'signup'} color='secondary' onPress={() => navigation.navigate(routes.REGISTER)} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // sets image background all the way i guess
    justifyContent: 'flex-end', // for its children
    alignItems: 'center' // aligning children
  },
  buttonContainer: {
    padding: 20,
    width: '100%'
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
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 10
  }
})


export default WelcomeScreen;