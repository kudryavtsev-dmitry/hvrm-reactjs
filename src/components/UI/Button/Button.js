import React from 'react'
import 'components/UI/Button/Button.scss'

const Button = ({ color, ...props }) => {
  return <button className={color} {...props} />
}
export default Button
