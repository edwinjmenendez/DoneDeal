import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Platform } from 'react-native';

export default function App() {
  // Platform imports is for OS options; StatusBar sets thje current height of header of device
  // used since SafeAreaView is only for IOS

  return (
    <SafeAreaView style={styles.container}>
      <Button 
        title='Click Me'
        onPress={() => console.log('text')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center', 
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
