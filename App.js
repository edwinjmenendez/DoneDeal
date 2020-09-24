import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View 
      style={{
        backgroundColor: 'dodgerblue',
        flex: 1 // doesnt even show up!! btw this is the parent 
      }}
    >
      <View 
        style={{
          backgroundColor: 'red',
          flex: 1 // same size as gold
        }}
      ></View>
      <View 
        style={{
          backgroundColor: 'black',
          flex: 2 // double the size of the others
        }}
      ></View>
      <View 
        style={{
          backgroundColor: 'gold',
          flex: 1 // same size as red
        }}
      ></View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center', 
//     // justifyContent: 'center',
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });
