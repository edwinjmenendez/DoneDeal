import React from 'react';
import { Platform, SafeAreaView, ScrollView } from 'react-native';

import WelcomeScreen from './src/Screens/WelcomeScreen';
// import ViewImageScreen from './src/Screens/ViewImageScreen.js';

import Card from './src/Components/Card'
import AppText from './src/Components/AppText/AppText'

export default function App() {
  return (
    <ScrollView 
      style={{
        flex: 1,
        backgroundColor: '#f8f4f4',
        paddingTop: Platform.OS === 'android' ? 100 : 0,
      }}>
        <Card
          title={'Red jacket for sale'}
          subTitle={'$100'}
          image={require('./src/assets/jacket.jpg')} />
        <Card
          title={'Red jacket for sale'}
          subTitle={'$100'}
          image={require('./src/assets/gorgeous.jpg')} />
        <Card
          title={'Red jacket for sale'}
          subTitle={'$100'}
          image={require('./src/assets/couch.jpg')} />
    </ScrollView>
  );
}

// https://expo.io/@ejmenendez/DoneWithItPart2