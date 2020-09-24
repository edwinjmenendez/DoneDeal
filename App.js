import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {

  // console.log('App Excecuted') shows up in terminal
  return (
    // with SafeAreaView now <text> is no longer behind ipone notch, adding some padding 
    <SafeAreaView style={styles.container}>
      <Text>Hello Mom</Text>
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
