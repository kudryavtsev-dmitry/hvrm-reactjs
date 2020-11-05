import { IconButton } from 'components/UI'
import React from 'react'

const TurnOffButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <i
      className="fa fa-stop-circle-o"
      aria-hidden="true"
    ></i>
    Turn off
  </IconButton>
)
export default TurnOffButton
