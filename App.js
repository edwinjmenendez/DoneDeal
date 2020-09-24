import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function App() {
// TOUCHABLES; look at different imports

  return (
    <SafeAreaView style={styles.container}>
      {/* look at button attributes for further info */}
      <Button 
        title='Click Me'
        onPress={() => console.log('pressed')}
        color='black'  
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
});
