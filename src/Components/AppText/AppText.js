import React from 'react'
import { Text } from 'react-native'

// import styles from './styles' // NOT USED
import defaultStyles from '../../config/styles'

const AppText = ({ children, style }) => {
  return (
    // the second element overwrites the first  
    <Text numberOfLines={3} style={[defaultStyles.text, style]} >{children}</Text>
  )
}

export default AppText;