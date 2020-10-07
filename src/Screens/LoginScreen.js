import { Formik } from 'formik'
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AppButton from '../Components/AppButton'
import AppTextInput from '../Components/AppTextInput'


import Screen from '../Components/Screen'

// secureTextEntry automatically set to true

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image
        source={require('../assets/logo-red.png')}
        style={styles.logo} />
        <Formik
          initialValues={{ email: '', password: ',' }}
          onSubmit={values => console.log(values)}
        >
          { ({ handleChange, handleSubmit }) => (
            <>           
              <AppTextInput
                autoCapitalize='none'
                autoCorrect={false} 
                icon='email'
                keyboardType='email-address'
                onChangeText={handleChange('email')}
                placeholder='Email'
                textContentType='emailAddress'
              />
              <AppTextInput
                autoCapitalize='none'
                autoCorrect={false} 
                icon='lock'
                placeholder='Password'
                onChangeText={handleChange('password')}
                secureTextEntry
                textContentType='password'
              />
              <AppButton
                title='Login'
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    // padding:  20, // padding dont work; not sure why
    margin: 10,
  },
  logo: {
     width: 80,
     height: 80,
     alignSelf: 'center',
     marginTop: 50,
     marginBottom: 20,
  }
})

export default LoginScreen
