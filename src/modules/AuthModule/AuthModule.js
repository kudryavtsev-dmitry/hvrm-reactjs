import React from 'react'
import { connect } from 'react-redux'
import { Auth } from 'components/Auth'
import { useFormik } from 'formik'
import authSchema from 'components/Auth/yup'
import { authUser } from 'modules/AuthModule/asyncActions/authUser'

const AuthModule = ({ authUser }) => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: authSchema,
    onSubmit: (values) => authUser(values),
  })
  return <Auth formik={formik} />
}
const mapDispatchToProps = {
  authUser,
}

export default connect(null, mapDispatchToProps)(AuthModule)
