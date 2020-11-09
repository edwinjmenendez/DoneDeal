import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Icon from '../Components/Icon'

import ListItem from '../Components/lists/ListItem'
import ListItemSeparator from '../Components/lists/ListItemSeparator'
import Screen from '../Components/Screen'
import colors from '../config/colors'

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    }
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    }
  },
]

const MyAccountScreen = () => {
  return (
    <Screen style={styles.screen} >
      <View style={styles.container} >
        <ListItem 
          title='Edwin Menendez'
          subTitle='edwinsemail@gmail.com'
          image={require('../assets/edwin.jpg')}
        />
      </View>
      <View style={styles.container} >
        <FlatList 
          data={menuItems}
          keyExtractor={menuItem => menuItem.title.toString()}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => 
            <ListItem
              title={item.title}
              IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}
               />} /> }
        />
      </View>
      <View style={styles.container} >
        <ListItem 
          title='Log Out'
          IconComponent={
            <Icon  name='logout' backgroundColor='#ff366d'/>} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light
  }
})


export default MyAccountScreen

