import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const ButtonComp = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 70,
    width: '100%',
    alignSelf: 'center',
    margin: '100%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
    
  }
})

export default ButtonComp;