import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, Text, View,
  SafeAreaView, Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';

export default function App() {
// TOUCHABLES; look at different imports

  return (
    <SafeAreaView style={styles.container}>
      <Text> Beyond Burger </Text>
      {/* image must be inside TouchableWithoutFeedback in order to use on(long)Press(in/out)
            TouchableWithoutFeedback: shows up on terminal but doesnt give feedback on app
            TouchableOpacity: for a fraction of a second, image fades off when touched
            TouchableHighlight: image gets highlighted when clicked
            TouchableNativeFeedback: doesnt do much when its wrapped in an image; must be wrapped in a view component;
              for iphone it seems to not do anything though
      */}
      <TouchableNativeFeedback onPress={() => console.log('image pressed')} > 
        <Image
          source={{
            uri: 'https://picsum.photos/200/300',
            width: 200,
            height: 300,
          }} 
        />
      </TouchableNativeFeedback>

      {/* only for TouchableNativeFeedback
      <TouchableNativeFeedback onPress={() => console.log('image pressed')} > 
        <View style={{
            backgroundColor: 'dodgerblue',
            width: 200,
            height: 300,
          }} 
        >
        </View>
      </TouchableNativeFeedback>    */}

      <StatusBar style="auto" />
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
