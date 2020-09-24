import React from 'react';
import { 
  StyleSheet, 
  Text, 
  SafeAreaView, View,
  Button, 
  Platform,
  StatusBar
} from 'react-native';

export default function App() {

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
    // this was removed because if padding line wasnt added the click me button would interfere with header of non iphones
    // alignItems: 'center', 
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
