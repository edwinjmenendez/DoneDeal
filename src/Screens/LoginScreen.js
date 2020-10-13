import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import AppButton from '../Components/AppButton'
import AppText from '../Components/AppText/AppText'
import AppTextInput from '../Components/AppTextInput'
import Screen from '../Components/Screen'
import ErrorMessage from '../Components/ErrorMessage'
import AppFormField from '../Components/AppFormField'
import SubmitButton from '../Components/SubmitButton'
import AppForm from '../Components/AppForm'

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
      <AppForm
        initialValues={{ email: '', password: ',' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false} 
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder='Email'
          textContentType='emailAddress'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false} 
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
          />
        <SubmitButton title='Login' />
      </AppForm>
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
