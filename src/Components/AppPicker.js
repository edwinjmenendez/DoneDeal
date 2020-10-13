import React, { useState } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

// import colors from '../config/colors'
import defaultStyles from '../config/styles'
import AppText from './AppText/AppText'
import Screen from './Screen'
import PickerItem from './PickerItem'

const AppPicker = ({ icon, items, onSelectItem, placeholder, selectedItem }) => {
  const [modalVisible, setModelVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModelVisible(true)} >
        <View style={styles.constainer} >
          { icon && 
            <MaterialCommunityIcons 
              color={defaultStyles.colors.medium}
              name={icon}
              size={20}
              style={styles.icon} />}
          <AppText style={styles.text} >{selectedItem ? selectedItem.label : placeholder}</AppText>
          <MaterialCommunityIcons 
              // style={styles.icon}
              color={defaultStyles.colors.medium}
              name='chevron-down'
              size={20} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide' >
        <Screen>
          <Button title='Close' onPress={() => setModelVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) =>
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModelVisible(false)
                  onSelectItem(item)
                }} />
            }
          />
        </Screen>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    margin: 10,
  },
  text: {
    flex: 1,
  }
})


export default AppPicker
