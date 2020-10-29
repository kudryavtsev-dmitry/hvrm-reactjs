import React from 'react'
import classes from './Auth.module.scss'
import { NavLink } from 'react-router-dom'
import { Input, Button } from 'components/UI'

const AuthComponent = ({ formik }) => {
  return (
    <div className={classes.container}>
      <h1>Authorization</h1>
      <form
        className={classes.form}
        onSubmit={(event) => {
          event.preventDefault()
          formik.handleSubmit()
        }}
      >
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
          onBlur={formik.handleBlur}
        />
        <Button
          color="primary"
          disabled={formik.isSubmitting}
          type="submit"
        >
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
export default AuthComponent
