import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View 
      style={{
        backgroundColor: 'dodgerblue',
        flex: 1, // doesnt even show up!! btw this is the parent
        flexDirection: 'row', // by defeault, the direction (without this) ios vertical not horizontal
      }}
    >
      <View 
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 200
        }}
      ></View>
      <View 
        style={{
          backgroundColor: 'black',
          width: 100,
          height: 200
        }}
      ></View>
      <View 
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 200
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
