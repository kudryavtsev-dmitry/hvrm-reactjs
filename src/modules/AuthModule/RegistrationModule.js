import React from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import registrationSchema from 'components/Registration/yup'
import { registration } from 'modules/AuthModule/asyncActions/registration'
import Registration from 'components/Registration'

const RegistrationModule = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
    },
    validationSchema: registrationSchema,
    onSubmit: values => dispatch(registration(values)),
  })
  return (
    <Registration formik={formik} />
  )
}

export default RegistrationModule

