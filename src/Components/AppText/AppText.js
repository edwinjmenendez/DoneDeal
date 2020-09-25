import React from 'react'
import { StyleSheet, Text } from 'react-native'

import styles from './styles'

const AppText = ({ children, style }) => {
  return (
    // the second element overwrites the first  
    <Text style={[styles.text, style]} >{children}</Text>
  )
}

export default AppText;