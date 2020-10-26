import React from 'react'
import './Auth.scss'
import { Form, Formik } from 'formik'
import { Input } from '../../UI/Input/Input'
import { Button } from '../../UI/Button/Button'
import authSchema from './yup'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {authUser} from "../../redux-toolkit/auth/actions/authUser";

const Auth = () => {
  const dispatch = useDispatch()

  return (
    <div className="Auth-container">
      <h1>Authorization</h1>
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        validationSchema={authSchema}
        onSubmit={(values) => dispatch(authUser(values))}
      >
        {({ isSubmitting }) => (
          <Form className="Auth-form">
            <Input name="login" label="Login" />
            <Input name="password" type="password" label="Password" />
            <Button color="primary" type="submit" disabled={isSubmitting}>
              Enter
            </Button>
            <div>
              Not registered?
              <NavLink to="/registration">Registration</NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default Auth
