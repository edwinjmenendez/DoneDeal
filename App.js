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
          height: 200,
          // BY DEFAULT THE POSITION IS SET TO RELATIVE FOR REACT NATIVE COMPONENTS
            // so if i add padding to any of these components left, right, it'll just over/underlap the next color
          // IF YOU CHANGE a cxomponeent to ABSOLUTE,it moves relative to the parent component
            // i.e. this black color would be in the upper left corner while the other two comp remain in the center
          top: 20,
          left: 20,
          position: 'absolute'
        }}
      ></View>
      <View 
        style={{
          backgroundColor: 'pink',
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

// https://expo.io/@ejmenendez/DoneWithItPart2