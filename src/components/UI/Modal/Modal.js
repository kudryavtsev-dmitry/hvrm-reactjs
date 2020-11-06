import React from 'react'
import ReactDom from 'react-dom'
import classes from './Modal.module.scss'

export default function Modal({ open, children, onCLose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className={classes.overlay} onClick={onCLose} />
      <div className={classes.modal}>{children}</div>
    </>,
    document.getElementById('modal'),
  )
}
