import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import ActivityIndicator from '../Components/ActivityIndicator'
import AppButton from '../Components/AppButton'
import AppText from '../Components/AppText/AppText'
import Card from '../Components/Card'
import colors from '../config/colors'
import listingsApi from '../api/listings'
import routes from '../navigation/routes'
import Screen from '../Components/Screen'
import useApi from '../hooks/useApi'

const ListingScreen = () => {
  const navigation = useNavigation();
  // custom hook that takes in an api function; awaits data and retreives data back
  const getListingApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingApi.request();
  }, [])
  
  return (
    <Screen style={styles.screen}>
      {getListingApi.error && <>
        <AppText>Error reteiving listings</AppText>
        <AppButton title='Retry' onPress={getListingApi.request} />
      </>}
      {/* {isLoading && <ActivityIndicator animating={isLoading} size={50}/>} */}
      <ActivityIndicator visible={getListingApi.isLoading} />
      <FlatList 
        data={getListingApi.data}
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
