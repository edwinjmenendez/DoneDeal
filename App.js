import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View 
      style={{
        backgroundColor: 'white',
        flex: 1, // doesnt even show up!! btw this is the parent
        flexDirection: 'row', // by defeault, the direction (without this) ios vertical not horizontal
        justifyContent: 'center', // align item along the main axis; dependent on flexDir; space around/between etc // aligns main axis (in this case horizontally)
        alignItems: 'center', // align item along the main axis; dependent on flexDir; space around/between etc // aligns secondary axis (in this case vertically)
        alignContent: 'center', // needed with flex wrap to not fuck up display... in case too many boxes are in one line..(redo)
        flexWrap: 'wrap'
      }}
    >
      <View 
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 200,
          // alignSelf: 'flex-start', // aligns chosen element on 2ndary axis (i think) 
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
          backgroundColor: 'pink',
          width: 100,
          height: 200
        }}
      ></View>
      <View 
        style={{
          backgroundColor: 'orange',
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
