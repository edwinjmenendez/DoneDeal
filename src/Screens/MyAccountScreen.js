import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Icon from '../Components/Icon'

import ListItem from '../Components/ListItem'
import ListItemSeparator from '../Components/ListItemSeparator'
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
      
      {/* <View style={styles.container} >
        <ListItem 
          title='Edwin Menendez'
          subTitle='edwinsemail@gmail.com'
          image={require('../assets/edwin.jpg')}
        />
      </View> */}
    </Screen>
    
    
    
    
    
    // MY ATTEMPT
    // name and email info
    // <View>
    //   <View style={styles.container}>
    //     <ListItem
    //       title={'Edwin Menendez'}
    //       subTitle={'edwin@test.com'}
    //       image={require('../assets/edwin.jpg')}
    //       onPress={() => console.log('hehe')}
    //       renderRightActions={() => console.log('hoho')} />
    //   </View>
    //   <FlatList style={styles.container}>
    //     <ListItem
    //       title={'Edwin Menendez'}
    //       subTitle={'edwin@test.com'}
    //       image={require('../assets/edwin.jpg')}
    //       onPress={() => console.log('hehe')}
    //       renderRightActions={() => console.log('hoho')} />
    //     <ListItem
    //       title={'Edwin Menendez'}
    //       subTitle={'edwin@test.com'}
    //       image={require('../assets/edwin.jpg')}
    //       onPress={() => console.log('hehe')}
    //       renderRightActions={() => console.log('hoho')} />
    //   </FlatList>
    // </View>
    // list
      // my listings
      // my messages
    // log out
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

