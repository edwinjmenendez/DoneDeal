import { Formik } from 'formik'
import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AppButton from '../Components/AppButton'
import AppTextInput from '../Components/AppTextInput'


import Screen from '../Components/Screen'

// secureTextEntry automatically set to true

const LoginScreen = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  
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
                onChangeText={text => setEmail(text)}
                placeholder='Email'
                textContentType='emailAddress'
              />
              <AppTextInput
                autoCapitalize='none'
                autoCorrect={false} 
                icon='lock'
                placeholder='Password'
                onChangeText={text => setPassword(text)}
                secureTextEntry
                textContentType='password'
              />
            </>
          )}
        </Formik>
      <AppButton
        title='Login'
        onPress={() => console.log(email, password)}
      />
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
