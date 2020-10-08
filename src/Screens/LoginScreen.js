import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import AppButton from '../Components/AppButton'
import AppText from '../Components/AppText/AppText'
import AppTextInput from '../Components/AppTextInput'
import Screen from '../Components/Screen'
import ErrorMessage from '../Components/ErrorMessage'

// secureTextEntry automatically set to true

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image
        source={require('../assets/logo-red.png')}
        style={styles.logo} />
        <Formik
          initialValues={{ email: '', password: ',' }}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}
        >
          { ({ handleChange, handleSubmit, errors }) => (
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
              <ErrorMessage error={errors.email} />
              <AppTextInput
                autoCapitalize='none'
                autoCorrect={false} 
                icon='lock'
                placeholder='Password'
                onChangeText={handleChange('password')}
                secureTextEntry
                textContentType='password'
                />
              <ErrorMessage error={errors.password} />
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
