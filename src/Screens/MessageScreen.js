import React from 'react'
import { View, Text, FlatList, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import Constants from 'expo-constants';

import ListItem from '../Components/ListItem'

// dummyData

const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'HELLO',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'WORLD',
    image: require('../assets/mosh.jpg')
  },
]

const MessageScreen = () => {
  // flatList takes 3 props
  return (
    <SafeAreaView style={styles.container} >
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()} // converted to string because we'll get a warning
        renderItem={({ item }) => 
          <ListItem 
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  }

})

export default MessageScreen;
