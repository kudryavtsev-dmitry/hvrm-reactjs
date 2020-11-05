import { IconButton } from 'components/UI'
import React from 'react'

const ShutDownButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <i className="fa fa-power-off" aria-hidden="true"></i>
    Shutdown
  </IconButton>
)

export default ShutDownButton
