import React from 'react'
import classes from './IconButton.module.scss'

export default function IconButton({
  icon,
  children,
  ...props
}) {
  return (
    <button className={classes.button} {...props}>
      <div className={classes.icon}>
        <i className={icon} aria-hidden="true"></i>
        {children}
      </div>
    </button>
  )
}
