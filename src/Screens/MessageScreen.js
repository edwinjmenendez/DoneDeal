import React, { useState } from 'react'
import { FlatList } from 'react-native'

import ListItem from '../Components/lists/ListItem'
import ListItemDeleteAction from '../Components/lists/ListItemDeleteAction';
import ListItemSeparator from '../Components/ListItemSeparator';
import Screen from '../Components/Screen';

// dummyData

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = message => {
    // const newMessages = messages.filter(m => m.id  !== message);
    // setMessages(newMessages)
    setMessages(messages.filter(m => m.id  !== message.id))
    console.log(message, 'deleted')
  }
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
            onPress={() => console.log('Message ID: ', item.id, 'selected')}
            renderRightActions={() => 
              <ListItemDeleteAction onPress={() => handleDelete(item)} /> }
          />}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={()  => setMessages(initialMessages)}
      />
    </Screen>
  )
}

export default MessageScreen;
