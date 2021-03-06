import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

const AppButton = ({title, onPress, color='primary'}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: colors[color] }] }>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    marginVertical: 10
  },
  text: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 18,
    textTransform: 'uppercase'
  }
})

export default AppButton;