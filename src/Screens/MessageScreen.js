import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Testing MessageScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

})

export default MessageScreen;
