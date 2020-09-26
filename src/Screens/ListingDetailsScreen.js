import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import AppText from '../Components/AppText/AppText'

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image
        source={require('../assets/jacket.jpg')}
        style={styles.productImage}/>
    </View>
  )
}

const styles = StyleSheet.create({
  listing: {

  },
  name: {

  },
  productImage: {
    height: 300,
    width: '100%'
  },
  profileImage: {

  },
  subTitle: {

  },
  title: {

  }
})

export default ListingDetailsScreen
