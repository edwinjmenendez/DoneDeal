import React from 'react'
import * as Yup from 'yup'

import { AppForm, AppFormField } from '../Components/forms'
import AppFormPicker from '../Components/forms/AppFormPicker'

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
      <AppFormField
        name='description'
        placeholder='Description'
      />
      <AppFormPicker 
        items={categories}
      />
    </AppForm>
  )
}

export default ListingEditScreen
