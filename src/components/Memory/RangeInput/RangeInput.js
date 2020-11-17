import React from 'react'
import classes from '../Memory.module.scss'

export const RangeInput = ({ value, onChange, Text }) => {
  return (
    <div className={classes.priority}>
      <input
        type="range"
        id="priority"
        name="priority"
        min="0"
        value={value ? value : ''}
        step="10"
        max="100"
        onChange={onChange}
      />
      <label htmlFor="priority">
        {value}% {Text}
      </label>
    </div>
  )
}
