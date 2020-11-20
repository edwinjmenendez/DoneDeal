import React from 'react'
import { useFormikContext } from 'formik';

import ImageInputList from '../lists/ImageInputList';
import ErrorMessage from './ErrorMessage';

const FormImagePicker = ({ name }) => {

  const { errors, setFieldValue, touched, values } = useFormikContext();
  // console.log(values)
  const imageURIs = values[name];

  const handleAdd = uri => {
    setFieldValue(name, [...imageURIs, uri])
  }

  const handleRemove = uri => {
    setFieldValue(name, imageURIs.filter(imageURI => imageURI !== uri))
  }

  return (
    <>
      <ImageInputList
        imageURIs={imageURIs}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default FormImagePicker;
