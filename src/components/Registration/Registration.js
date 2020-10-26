import React from 'react'
import './Registration.scss'
import { Form, Formik } from 'formik'
import { Input } from '../../UI/Input/Input'
import { Button } from '../../UI/Button/Button'
import registrationSchema from './yup'
import { useDispatch } from 'react-redux'
import {registration} from "../../redux-toolkit/auth/actions/registration";
import {NavLink} from "react-router-dom";

const Registration = () => {
  const dispatch = useDispatch()

  return (
    <div className="Registration-container">
      <h1>Registration</h1>
      <Formik
        initialValues={{
          login: '',
          password: '',
          email: '',
          firstName: '',
          lastName: '',
        }}
        validationSchema={registrationSchema}
        onSubmit={(values) => dispatch(registration(values))}
      >
        {({ isSubmitting }) => (
          <Form className="Registration-form">
            <Input name="login" label="Login" />
            <Input name="password" type="password" label="Password" />
            <Input name="email" type="email" label="Email" />
            <Input name="firstName" label="First Name" />
            <Input name="lastName" label="Last Name" />
            <Button color="primary" type="submit" disabled={isSubmitting}>
              Registration
            </Button>
              <div>
                  Already has account?
                  <NavLink to="/auth">Enter</NavLink>
              </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default Registration
