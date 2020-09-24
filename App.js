import React from 'react';
import { 
  Dimensions,
  StyleSheet, 
  SafeAreaView, View, 
  Platform,
  StatusBar
} from 'react-native';

// these hooks dont work on my computer... figure out later
// import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
// useDimensions basicavlly gets the dimensions portrqait/horizontally
//  useDeviceOrientation() is a boolean that returns an object i.e. portrait: true

export default function App() {
  // console.log(Dimensions.get('screen')) // checks the dimensions of screen
  // console.log(useDeviceOrientation())

  // const { landscape } = useDeviceOrientation()
  // depending on orientation, it'll configure my height

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        width: '50%',
        height: '70%',
        // height: landscape ? '70%' : '30%', hook doesnt work on my device
        backgroundColor: 'dodgerblue'
      }} >

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center', 
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
