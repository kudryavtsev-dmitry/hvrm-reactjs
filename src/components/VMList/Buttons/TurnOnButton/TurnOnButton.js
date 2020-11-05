import { IconButton } from 'components/UI'
import React from 'react'

const TurnOnButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <i className="fa fa-power-off" aria-hidden="true"></i>
    Turn on
  </IconButton>
)
export default TurnOnButton
