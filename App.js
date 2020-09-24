import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {

  // console.log('App Excecuted') shows up in terminal
  // handlePress will be on the actual text
  const handlePress = () => console.log('same as onCLick i think')

  return (
    // with SafeAreaView now <text> is no longer behind ipone notch, adding some padding 
    
    // Initially what happens when you add a bunch of text is text 
    // will go edge to edge and move onto next line
    // but if you set a nuberOfLines prop it'll be ion one full line with ...
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}> Beyond Burger </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    // if these two are removed text is at the very top of iphone xr screen (bad)
    // fixed by adding the SafeAreaView component
    alignItems: 'center', 
    justifyContent: 'center',
  },
});
