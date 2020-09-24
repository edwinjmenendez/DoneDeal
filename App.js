import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  // 
  return (
    // the left element gets overwritten by the custom one on the write
    // i guess you can have more than 2 elements...DOCS
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button 
        title='Click Me'
        onPress={() => console.log('text')}
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: 'orange' }

// we use stylesheet because it throws errors if we misspell something,
// and i guess its for optimization i guess sop its recommended
// very conventional to have styles in the same file, but can separate styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
});
