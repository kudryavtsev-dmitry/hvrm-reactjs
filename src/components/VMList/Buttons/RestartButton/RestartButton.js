import { IconButton } from 'components/UI'
import React from 'react'

const RestartButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <i className="fa fa-undo" aria-hidden="true"></i>
    Resume
  </IconButton>
)
export default RestartButton
