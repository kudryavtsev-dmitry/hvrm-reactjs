import React from 'react'
import 'components/Auth/Auth.scss'

import { NavLink } from 'react-router-dom'
import { Input } from 'components/UI/Input/Input'
import { Button } from 'components/UI/Button/Button'


const Auth = ({ formik }) => {

  return (
    <div className="Auth-container">
      <h1>Authorization</h1>
      <form className="Auth-form" onSubmit={event => {
        event.preventDefault()
        formik.handleSubmit()}}>
        <Input
          name="login"
          label="Login"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.login}
          touched={formik.touched.login}
          onBlur={formik.handleBlur}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
          touched={formik.touched.password}
          onBlur={formik.handleBlur} />
        <Button color="primary" disabled ={formik.isSubmitting} type ='submit'>
          Enter
        </Button>
        <div>
          Not registered?
          <NavLink to="/registration">Registration</NavLink>
        </div>
      </form>
    </div>
  )
}
export default Auth
