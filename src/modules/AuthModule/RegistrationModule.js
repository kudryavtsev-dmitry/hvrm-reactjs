import React from 'react'
import { connect } from 'react-redux'
import { useFormik } from 'formik'
import registrationSchema from 'components/Registration/yup'
import { registration } from 'modules/AuthModule/asyncActions/registration'
import Registration from 'components/Registration'

const RegistrationModule = ({ registration }) => {

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
    },
    validationSchema: registrationSchema,
    onSubmit: values => registration(values),
  })
  return (
    <Registration formik={formik} />
  )
}

const mapDispatchToProps = {
  registration,
}

export default connect(null, mapDispatchToProps)(RegistrationModule)

