import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import Card from '../Components/Card'
import colors from '../config/colors'
import listingsApi from '../api/listings'
import Screen from '../Components/Screen'
import routes from '../navigation/routes'
import AppText from '../Components/AppText/AppText'
import AppButton from '../Components/AppButton'

const ListingScreen = () => {
  const navigation = useNavigation();
  const [listings, setListings] = useState([])
  const [error, setError] = useState(false);
  
  useEffect(() => {
    loadListings();
  }, [])
  
  const loadListings = async () => {
    const response = await listingsApi.getListings();
    if (!response.ok) return setError(true);
    setError(false);
    setListings(response.data)  
  }

  return (
    <Screen style={styles.screen}>
      {error && <>
        <AppText>Error reteiving listings</AppText>
        <AppButton title='Retry' onPress={loadListings} />
      </>}
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
    backgroundColor: colors.light,
    padding: 20,
  }
})


export default ListingScreen
