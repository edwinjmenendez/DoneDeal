import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen from './src/Components/Screen';


export default function App() {
  // gives us access to the Screen/Nav keys which should be wrapped in a navContainer 
  const Stack = createStackNavigator();

  // dummy components
  const Link = () => {
    // only Stack.Screens have access to navigation prop; but if you access navHook; you'll have access to that prop
    const navigation = useNavigation();

    return (
      <Button
        title='View Tweets Now'
        onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
      />
    )
  }

  const Tweets = ({ navigation }) => (
      <Screen>
        <Text>Tweets</Text>
        <Link />
      </Screen>
    )
  const TweetDetails = ({ route }) => (
      <Screen>
        <Text>Tweet Details {route.params.id} </Text>
      </Screen>
    )

  const StackNavigator = () => (
    // navigator ONLY takes screen components
    <Stack.Navigator initialRouteName='Tweets' >
      <Stack.Screen name='TweetDetails' component={TweetDetails} options={({ route }) => ({ title: route.params.id })} />
      <Stack.Screen name='Tweets' component={Tweets} />
    </Stack.Navigator>
  )

  return (
    // navContainer ONLY takes navigator with screen components
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