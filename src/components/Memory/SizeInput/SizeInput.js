import React from 'react'
import classes from '../Memory.module.scss'

export const SizeInput = ({ value, text, onChange }) => {
  return (
    <div className={classes.dynamicMemory}>
      <p>{text}</p>
      <input
        type="text"
        value={value ? value : ''}
        onChange={onChange}
      />
      <p>MB</p>
    </div>
  )
}
