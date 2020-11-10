import React from 'react'
import { Text } from 'react-native'

// import styles from './styles' // NOT USED
import defaultStyles from '../../config/styles'

const AppText = ({ children, style, ...otherProps }) => {
  return (
    // the second element overwrites the first  
    <Text style={[defaultStyles.text, style]} {...otherProps} >{children}</Text>
  )
}

export default AppText;