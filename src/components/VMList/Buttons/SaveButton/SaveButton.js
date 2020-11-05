import { IconButton } from 'components/UI'
import React from 'react'

const SaveButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <i className="fa fa-floppy-o" aria-hidden="true"></i>
    Save
  </IconButton>
)
export default SaveButton
