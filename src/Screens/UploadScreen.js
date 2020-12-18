import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import AppText from '../Components/AppText/AppText'

const UploadScreen = ({ progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <AppText>{progress * 100}%</AppText>
      </View>
    </Modal>
  )
}

export default UploadScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
