import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { 
  AppForm, 
  AppFormField, 
  AppFormPicker, 
  SubmitButton 
} from '../Components/forms';
import CategoryPickerItem from '../Components/CategoryPickerItem';
import FormImagePicker from '../Components/forms/FormImagePicker';
import Screen from '../Components/Screen';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(2).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  category: Yup.object().required().nullable().label('Category'),
  description: Yup.string().nullable().label('Description'),
  images: Yup.array()
})

const categories = [
  { 
    backgroundColor: '#fc5c65',    
    icon: 'floor-lamp', 
    label: 'Furniture', 
    value: 1 
  },
    {
    backgroundColor: '#fd9644',
    icon: 'car', 
    label: 'Cars', 
    value: 2 
  },
  { 
    backgroundColor: '#fed330',
    icon: 'camera', 
    label: 'Camera', 
    value: 3 
  },
  { 
    backgroundColor: '#26de81',
    icon: 'cards', 
    label: 'Games', 
    value: 4 
  },
  { 
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel', 
    label: 'Clothing', 
    value: 5 
  },
  { 
    backgroundColor: '#45aaf2',
    icon: 'basketball', 
    label: 'Sports', 
    value: 6 
  },
  { 
    backgroundColor: '#4b7bec',
    icon: 'headphones', 
    label: 'Music & Movies', 
    value: 7 
  },
  { 
    backgroundColor: '#4b7bec',
    icon: 'book', 
    label: 'Books', 
    value: 8 
  },
  { 
    backgroundColor: 'gray',
    icon: 'file-presentation-box', 
    label: 'Other', 
    value: 9 
  },
]

const ListingEditScreen = () => {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          category: null,
          description: '',
          images: [],
        }}
        onSubmit={values => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name={'images'} />
        <AppFormField
          maxLength={255}
          name='title'
          placeholder='Title'
        />
        <AppFormField
          keyboardType={'numeric'}
          maxLength={8}
          name='price'
          placeholder='Price'
          width={120}
        />
        <AppFormPicker 
          items={categories}
          name='category'
          numberOfColumns={3}
          placeholder='Category'
          PickerItemComponent={CategoryPickerItem}
          width='50%'
        />
        <AppFormField
          maxLength={255}
          multiline
          name='description'
          numberOfLines={3}
          placeholder='Description'
        />
        <SubmitButton title='post'/>
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
