import React from 'react'
import { FlatList } from 'react-native'

import ListItem from '../Components/ListItem'
import ListItemSeparator from '../Components/ListItemSeparator';
import Screen from '../Components/Screen';

// dummyData

const messages = [
  {
    id: 1,
    title: 'Mosh',
    description: 'Fuck Edwin',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 2,
    title: 'Edwin',
    description: 'I love Kelly',
    image: require('../assets/edwin.jpg')
  },
  {
    id: 3,
    title: 'Kelly',
    description: 'I love no one',
    image: require('../assets/kelly.jpg')
  },
  {
    id: 4,
    title: 'Edwin',
    description: 'I love Kelly',
    image: require('../assets/gorgeousHead.jpg')
  },
]

const MessageScreen = () => {
  // flatList takes 3 props
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()} // converted to string because we'll get a warning
        renderItem={({ item }) => 
          <ListItem 
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  )
}

export default MessageScreen;
