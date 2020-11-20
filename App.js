import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen from './src/Components/Screen';


export default function App() {
  // gives us access to the Screen/Nav keys which should be wrapped in a navContainer 
  const Stack = createStackNavigator();

  // dummy components
  const Tweets = ({ navigation }) => (
      <Screen>
        <Text>Tweets</Text>
        <Button
          title='View Tweets'
          onPress={() => navigation.navigate('TweetDetails')}
        />
      </Screen>
    )
  const TweetDetails = ({ navigation }) => (
      <Screen>
        <Text>Tweet Details</Text>
        <Button
          title='View Tweets'
          onPress={() => navigation.navigate('Tweets')}
        />
      </Screen>
    )

  const StackNavigator = () => (
    <Stack.Navigator initialRouteName='Tweets' >
      <Stack.Screen name='TweetDetails' component={TweetDetails} />
      <Stack.Screen name='Tweets' component={Tweets} />
    </Stack.Navigator>
  )

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

// https://expo.io/@ejmenendez/DoneWithItPart2