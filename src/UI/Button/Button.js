import React from "react";
import './Button.scss'


export const Button = ({color,  ...props}) => {


  return(
    <button className={color} {...props}/>
  )
}