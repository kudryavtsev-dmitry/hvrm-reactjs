import React from 'react'
import classes from './IconButton.module.scss'

export default function IconButton({ children, ...props }) {
  return (
    <button className={classes.button} {...props}>
      <div className={classes.icon}>{children}</div>
    </button>
  )
}
