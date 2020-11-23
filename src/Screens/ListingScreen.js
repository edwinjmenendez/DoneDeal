import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import Card from '../Components/Card'
import colors from '../config/colors'
import listingsApi from '../api/listings'
import Screen from '../Components/Screen'
import routes from '../navigation/routes'

const ListingScreen = () => {
  const navigation = useNavigation();
  
  const [listings, setListings] = useState([])
  
  useEffect(() => {
    loadListings();
  }, [])
  
  const loadListings = async () => {
    const response = await listingsApi.getListings();
      setListings(response.data)  
  }

  return (
    <Screen style={styles.screen} >
        <FlatList 
          data={listings}
          keyExtractor={listing => listing.id.toString()}
          renderItem={({ item }) => 
            <Card
              title={item.title}
              subTitle={`$${item.price}`}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}

            />}
        />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light
  }
})


export default ListingScreen
