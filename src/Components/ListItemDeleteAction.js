import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors'

const ListItemDeleteAction = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
          name='trash-can-outline'
          size={35}
          color={colors.white}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default ListItemDeleteAction