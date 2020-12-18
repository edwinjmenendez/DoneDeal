import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

import AppText from '../Components/AppText/AppText'
import colors from '../config/colors';

const UploadScreen = ({ progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? 
          <Progress.Bar color={colors.primary} progress={progress} width={200} />
          :
          <LottieView 
            autoPlay
            loop={false}
            source={require('../assets/animations/done.json')}
            style={styles.animation} 
          />}
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
  },
  animation: {
    width: 150,
  },
})
