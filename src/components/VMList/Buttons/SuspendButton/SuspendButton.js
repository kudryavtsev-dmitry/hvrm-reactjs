import { IconButton } from 'components/UI'
import React from 'react'

const SuspendButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <i className="fa fa-pause" aria-hidden="true"></i>
    Suspend
  </IconButton>
)
export default SuspendButton
