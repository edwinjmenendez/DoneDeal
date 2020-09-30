import React from 'react'
import { View, Image, StyleSheet } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText/AppText';

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container} >
      <Image
        source={image}
        style={styles.image}
      />
      <View style={styles.detailsContainer} >
        <AppText style={styles.title} >{title}</AppText>
        <AppText style={styles.subTitle} >{subTitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 15,
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
