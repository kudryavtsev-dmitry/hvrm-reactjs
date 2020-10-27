import React from "react";
import 'components/UI/Input/Input.scss'

export const Input = ({label, touched, error ,  ...props}) => {

  console.log('touched', touched,'error',  error)
  return(
    <div className='Input-container'>
    <label className='Input-label'>
      {label}
      <input {...props} className={ touched && error ? 'Input-error Input-place' : 'Input-place'}/>
    </label>
      {touched && error ? (
        <div className="Input-span">{error}</div>
      ) : null}
    </div>
  )
}