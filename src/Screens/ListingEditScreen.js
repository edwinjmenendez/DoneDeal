import React from 'react'
import { StyleSheet } from 'react-native'
import * as Yup from 'yup'

import { AppForm, AppFormField, AppFormPicker } from '../Components/forms'
import Screen from '../Components/Screen'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(2).label('Title'),
  price: Yup.string().required().min(1).max(10000).label('Price'),
  category: Yup.object().required().nullable().label('Category'),
  description: Yup.string().nullable().label('Description')
})

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Camera', value: 3 },
]

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          category: '',
          description: ''
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name='title'
          placeholder='Title'
        />
        <AppFormField
          name='price'
          placeholder='Price'
        />
        <AppFormPicker 
          items={categories}
          placeholder='Category'
        />
        <AppFormField
          name='description'
          placeholder='Description'
        />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10, // padding does not work
  }
})

export default ListingEditScreen
