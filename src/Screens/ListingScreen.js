import React from 'react'
import { StyleSheet, FlatList } from 'react-native'

import Card from '../Components/Card'
import Screen from '../Components/Screen'
import colors from '../config/colors'

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
]

const ListingScreen = () => {
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
