import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen from './src/Components/Screen';
import MyAccountScreen from './src/Screens/MyAccountScreen';

export default function App() {
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
      <Screen style={styles.container} >
        <Text>Tweets</Text>
        <Link />
      </Screen>
    )
    const TweetDetails = ({ params }) => (
      <Screen style={styles.container} >
        <Text>Tweet Details </Text>
      </Screen>
    )
    
    // gives us access to the Screen/Nav keys which should be wrapped in a Tab NavContainer
    const Tab = createBottomTabNavigator();
    const TabNavigator = () => (
      // screens represent a tab
      <Tab.Navigator tabBarOptions={{ 
        activeBackgroundColor: 'gold',
        activeTintColor: 'purple',
        inactiveBackgroundColor: '#eee',
        inactiveTintColor: 'black', 
        }}
      >
        <Tab.Screen name='Tweets'component={StackNavigator} />
        <Tab.Screen name='Account' component={MyAccountScreen} />
      </Tab.Navigator>
    )

    // gives us access to the Screen/Nav keys which should be wrapped in a Stack navContainer 
    const Stack = createStackNavigator();
    const StackNavigator = () => (
      <Stack.Navigator 
      initialRouteName='Tweets'
      // stlye applies to all screens unless overwritten 
      screenOptions={{
        headerStyle: { backgroundColor: 'gold' },
        headerTintColor: 'purple',
      }}  
    >
      <Stack.Screen 
        name='TweetDetails'
        component={TweetDetails}
        options={{
          headerStyle: { backgroundColor: 'gold' },
          headerTintColor: 'purple',
          // headerShown: false,
        }} />
      <Stack.Screen name='Tweets' component={Tweets} />
    </Stack.Navigator>
  )

  return (
    // navContainer ONLY takes ONE navigator with screen components
    <NavigationContainer>
      <TabNavigator />
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