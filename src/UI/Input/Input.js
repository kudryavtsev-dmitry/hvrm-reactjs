import React from "react";
import {useField} from "formik";
import './Input.scss'

export const Input = ({label, ...props}) => {

  const [field, meta] = useField(props);

  return(
    <div className='Input-container'>
    <label className='Input-label'>
      {label}
      <input {...field}{...props} className={ meta.touched && meta.error ? 'Input-error Input-place' : 'Input-place'}/>
    </label>
      {meta.touched && meta.error ? (
        <div className="Input-span">{meta.error}</div>
      ) : null}
    </div>
  )
}