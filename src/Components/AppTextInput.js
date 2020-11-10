import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

// import colors from '../config/colors'
import defaultStyles from '../config/styles'

const AppTextInput = ({ icon, width, ...otherProps }) => {
  // if width is set on other components that use AppTextInput, it will be updated for textfield on View component line
  return (
    <View style={[styles.container, { width }]} >
      { icon && 
        <MaterialCommunityIcons 
          color={defaultStyles.colors.medium}
          size={20}
          style={styles.icon}
          name={icon} />}
      <TextInput placeholderTextColor={defaultStyles.colors.medium} style={defaultStyles.text} {...otherProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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
  }
})


export default AppTextInput
