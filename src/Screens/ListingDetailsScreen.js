import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import AppText from '../Components/AppText/AppText'
import ListItem from '../Components/lists/ListItem'
import colors from '../config/colors'

const ListingDetailsScreen = ({ route }) => {
  // since details components is a screen in the FeedNav. component; we have access to the route prop from listingScreen
  // We have access because we set second argument to navigation.navigate(routes.LISTING_DETAILS, item) <-- item
  const listing = route.params;
  return (
    <View>
      <Image
        source={listing.image}
        style={styles.productImage}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} >{listing.title}</AppText>
        <AppText style={styles.price} >${listing.price}</AppText>
      </View>
      <View style={styles.userContainer} >
        <ListItem
          image={require('../assets/edwin.jpg')}
          title={'Edwin Menendez'}
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
