import React from 'react'
import { View, Text, StyleSheet, TextInput, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

// import colors from '../config/colors'
import defaultStyles from '../config/styles'
import AppText from './AppText/AppText'

const AppPicker = ({ icon, placeholder, ...otherProps }) => {
  return (
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
