import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'
import { Dropdown } from 'components/UI'
import { connect } from 'react-redux'
import { getVM } from 'modules/VMListModule/asyncActions'

const Header = ({ getVM }) => {
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
        <i
          onClick={getVM}
          className="fa fa-refresh "
          aria-hidden="true"
        ></i>
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
        <Dropdown title={window.location.host} />
        <NavLink
          to="/profile"
          activeClassName={classes.active}
        >
          <div className={classes.profile}>
            <img
              className={classes.profileImage}
              src="https://msplatformht.com/wp-content/uploads/2020/05/cropped-blankprofile-9.png"
              alt="profile"
            />
          </div>
        </NavLink>
      </div>
    </div>
  )
}
const mapDisptahToProps = {
  getVM,
}

export default connect(null, mapDisptahToProps)(Header)
