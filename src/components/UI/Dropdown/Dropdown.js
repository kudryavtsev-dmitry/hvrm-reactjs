import useOutsideClick from 'hooks/useOutsideClick/useOutsideClick'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import classes from './Dropdown.module.scss'

function Dropdown({ title, list }) {
  const [isOpen, setIsOpen] = useState(false)

  const dropDownRef = useRef(null)

  useOutsideClick(dropDownRef, () => setIsOpen(false))

  return (
    <div className={classes.wrapper} ref={dropDownRef}>
      <div
        className={classes.header}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={classes.headerTitle}>
          {title}
          {isOpen ? (
            <i
              className="fa fa-caret-up"
              aria-hidden="true"
            ></i>
          ) : (
            <i
              className="fa fa-caret-down"
              aria-hidden="true"
            ></i>
          )}
        </div>
      </div>
      <ul
        className={
          isOpen
            ? classes.list + ' ' + classes.active
            : classes.list
        }
        id="myDropdown"
      >
        <li className={classes.item}>item 1</li>
        <li className={classes.item}>item 2</li>
        <li className={classes.item}>item 3</li>
        <li className={classes.item}>item 1</li>
        <li className={classes.item}>item 2</li>
        <li className={classes.item}>item 3</li>
        <li className={classes.item}>item 1</li>
        <li className={classes.item}>item 2</li>
        <li className={classes.item}>item 3</li>
      </ul>
    </div>
  )
}

export default Dropdown
