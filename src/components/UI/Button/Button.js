import React from 'react'
import classes from './Button.module.scss'

const Button = ({ color, ...props }) => {
  return <button className={classes[color]} {...props} />
}
export default Button
