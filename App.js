import React from 'react';
import { 
  Dimensions,
  StyleSheet, 
  Text, 
  SafeAreaView, View,
  Button, 
  Platform,
  StatusBar
} from 'react-native';

export default function App() {
  console.log(Dimensions.get('screen')) // checks the dimensions of screen
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        width: '50%',
        height: 70,
        backgroundColor: 'dodgerblue'
      }} >

      </View>
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
