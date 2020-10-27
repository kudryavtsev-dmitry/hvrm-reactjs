import React from "react";
import 'components/UI/Button/Button.scss'


export const Button = ({color,  ...props}) => {


  return(
    <button className={color} {...props}/>
  )
}