import React from 'react'
import classes from './Registration.module.scss'
import { NavLink } from 'react-router-dom'
import { Input, Button } from 'components/UI'

const RegistrationComponent = ({ formik }) => (
  <div className={classes.container}>
    <h1>Registration</h1>
    <form onSubmit={formik.handleSubmit}>
      <Input
        name="login"
        label="Login"
        value={formik.values.login}
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
      <Input
        name="email"
        type="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
        touched={formik.touched.email}
        onBlur={formik.handleBlur}
      />
      <Input
        name="firstName"
        label="First Name"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        error={formik.errors.firstName}
        touched={formik.touched.firstName}
        onBlur={formik.handleBlur}
      />
      <Input
        name="lastName"
        label="Last Name"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        error={formik.errors.lastName}
        touched={formik.touched.lastName}
        onBlur={formik.handleBlur}
      />
      <Button color="primary" type="submit">
        Registration
      </Button>
      <div>
        Already has account?
        <NavLink to="/auth">Enter</NavLink>
      </div>
    </form>
  </div>
)

export default RegistrationComponent
