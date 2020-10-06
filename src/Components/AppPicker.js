import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Platform, TouchableWithoutFeedback, Modal, Button } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

// import colors from '../config/colors'
import defaultStyles from '../config/styles'
import AppText from './AppText/AppText'
import Screen from './Screen'

const AppPicker = ({ icon, placeholder, ...otherProps }) => {
  const [modalVisible, setModelVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModelVisible(true)} >
        <View style={styles.constainer} >
          { icon && 
            <MaterialCommunityIcons 
              color={defaultStyles.colors.medium}
              size={20}
              style={styles.icon}
              name={icon} />}
          <AppText style={styles.text} >{placeholder}</AppText>
          <MaterialCommunityIcons 
              color={defaultStyles.colors.medium}
              size={20}
              // style={styles.icon}
              name='chevron-down' />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide' >
        <Screen>
          <Button title='Close' onPress={() => setModelVisible(false)} />
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
