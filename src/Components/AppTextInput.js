import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'


const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.constainer} >
      { icon && 
        <MaterialCommunityIcons 
          color={colors.medium}
          size={20}
          style={styles.icon}
          name={icon} />}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    marginVertical: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: 'Roboto',
    color: colors.dark,
  },
  icon: {
    margin: 10,
  }
})


export default AppTextInput
