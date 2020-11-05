import { IconButton } from 'components/UI'
import React from 'react'

const ResumeButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <i className="fa fa-play" aria-hidden="true"></i>
    Resume
  </IconButton>
)
export default ResumeButton
