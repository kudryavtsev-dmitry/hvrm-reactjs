import React from 'react'
import classes from './Switch.module.scss'

export const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={classes.reactSwitchCheckbox}
        id={'react-switch'}
        type="checkbox"
      />
      <label
        style={{ background: isOn && '#9bff70' }}
        className={classes.reactSwitchLabel}
        htmlFor={'react-switch'}
      >
        <span className={classes.reactSwitchButton} />
      </label>
    </>
  )
}
