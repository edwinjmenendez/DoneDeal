import React from 'react'
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText/AppText';

const Card = ({ title, subTitle, imageUrl, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={styles.container} >
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
        />
        <View style={styles.detailsContainer} >
          <AppText numberOfLines={1} style={styles.title} >{title}</AppText>
          <AppText numberOfLines={3} style={styles.subTitle} >{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden', // allows for borderRadius to show
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    height: 200,
    width: '100%'
  },
  title: {
    marginBottom: 7
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: 'bold'
  }
})

export default Card;
