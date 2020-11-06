import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'
import vmImage from 'images/vm-icon.png'

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleHamburgerClick = () => {
    setOpen(!open)
  }
  return (
    <div className={classes.container}>
      <div
        className={classes.hamburger}
        onClick={handleHamburgerClick}
      >
        <div className={classes.line} />
        <div className={classes.line} />
        <div className={classes.line} />
      </div>
      <div className={classes.imageWrapper}>
        <img src={vmImage} alt="virtual machine" />
      </div>
      <div
        className={
          open
            ? classes.links + ' ' + classes.open
            : classes.links
        }
      >
        <NavLink
          to="/list"
          activeClassName={classes.active}
        >
          Virtual Machines
        </NavLink>
        <NavLink to="/www" activeClassName={classes.active}>
          in development
        </NavLink>
        <NavLink to="/w" activeClassName={classes.active}>
          in development.
        </NavLink>
      </div>
    </div>
  )
}
export default Header
