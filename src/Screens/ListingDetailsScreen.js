import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import AppText from '../Components/AppText/AppText'
import ListItem from '../Components/lists/ListItem'
import colors from '../config/colors'

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image
        source={require('../assets/jacket.jpg')}
        style={styles.productImage}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} >Red jacket for sale</AppText>
        <AppText style={styles.price} >$100</AppText>
      </View>
      <View style={styles.userContainer} >
        <ListItem
          image={require('../assets/mosh.jpg')}
          title={'Mosh Menendez'}
          subTitle={'5 Listings'}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  listing: {

  },
  name: {

  },
  productImage: {
    height: 300,
    width: '100%'
  },
  userContainer: {
    marginVertical: 40
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold'
  },
  title: {
    marginBottom: 7,
    fontSize: 24,
    fontWeight: '500'
  }
})

export default ListingDetailsScreen
