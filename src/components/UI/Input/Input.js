import React from 'react'
import classes from './Input.module.scss'

const Input = ({ label, touched, error, ...props }) => {
  return (
    <div className={classes.container}>
      <label className={classes.label}>
        {label}
        <input
          {...props}
          className={
            touched && error
              ? classes.error + ' ' + classes.place
              : classes.place
          }
        />
      </label>
      {touched && error ? (
        <div className={classes.span}>{error}</div>
      ) : null}
    </div>
  )
}
export default Input
