import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, FlatList } from 'react-native'

import Card from '../Components/Card'
import Screen from '../Components/Screen'
import colors from '../config/colors'
import routes from '../navigation/routes'

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg')
  },
  {
    id: 2,
    title: 'Couch for sale',
    price: 400,
    image: require('../assets/couch.jpg')
  },
  {
    id: 3,
    title: 'Chair is nice and comfy',
    price: 700,
    image: require('../assets/chair.jpg')
  },
  {
    id: 4,
    title: 'Black coat for sale',
    price: 50,
    image: require('../assets/gorgeous.jpg')
  },
]

const ListingScreen = () => {
  const navigation = useNavigation();
  return (
    <Screen style={styles.screen} >
        <FlatList 
          data={listings}
          keyExtractor={listing => listing.id.toString()}
          renderItem={({ item }) => 
            <Card
              title={item.title}
              subTitle={`$${item.price}`}
              image={item.image}
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
