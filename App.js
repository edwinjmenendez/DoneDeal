import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
// alerts

  return (
    <SafeAreaView style={styles.container}>
      {/* alert('text') works the same way as browser aler but natively
          but to customize alert, import Alert as seen below
          can also add functionality to alert buttons of alerts
          alert prompt takes title, message callback
          ** NOTE: ALERTS ONLY WORK ON IOS as far as i know 
      */}
      <Button 
        title='Click Me'
        onPress={() => Alert.alert('My title', 'my message', [
          { text: 'Yes', onPress: () => console.log('yee')},
          { text: 'Yes', onPress: () => console.log('yup') },
        ])}
      />
      <Button 
        title='Click Me'
        onPress={() => Alert.prompt('My title', 'my message', text => console.log(text))}
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
