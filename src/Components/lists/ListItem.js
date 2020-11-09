import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../../config/styles'

import colors from '../../config/colors'
import AppText from '../AppText/AppText'

const ListItem = ({ title, subTitle, image, onPress, renderRightActions, IconComponent }) => {
  return (
    <Swipeable renderRightActions={renderRightActions} >
      <TouchableHighlight
        onPress={onPress}
        underlayColor={colors.light}
      >
        <View style={styles.container}>
          {IconComponent}
          {/* if no image is provided, extra width and props for image */}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.textDetailContainer} >
            <AppText style={styles.title} > {title} </AppText>
            {/* if no subtitle is not provided, it wont render and my title will be centered with image if given one */}
            {subTitle && <AppText style={styles.subTitle} > {subTitle} </AppText>}
          </View>
          <MaterialCommunityIcons 
            // style={styles.icon}
            color={defaultStyles.colors.medium}
            name='chevron-right'
            size={20} 
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center', // centers items vertically
  },
  textDetailContainer: {
    flex: 1, // takes up most of space so pushes chevron-image to the right side
    marginLeft: 10,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: '600'
  },
  subTitle: {
    color: colors.medium,
  }
})

export default ListItem
