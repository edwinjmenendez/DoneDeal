import React from 'react';
import { Platform, SafeAreaView, ScrollView, View } from 'react-native';

import WelcomeScreen from './src/Screens/WelcomeScreen';
// import ViewImageScreen from './src/Screens/ViewImageScreen.js';

import Card from './src/Components/Card'
import AppText from './src/Components/AppText/AppText'
import ListingDetailsScreen from './src/Screens/ListingDetailsScreen';

export default function App() {
  return (
      <ListingDetailsScreen
        // listings={5} 
        // nameTitle={'Edwin'}
        // productImage={require('./assets/jacket.jpg')}
        // productImage={require('./assets/jacket.jpg')}
        // profileImage={require('./assets/mosh.jpg')}
        // subTitle={$100}
        // title={'Red Jacket for sale'}
      />
  );
}

// https://expo.io/@ejmenendez/DoneWithItPart2