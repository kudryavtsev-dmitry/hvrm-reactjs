import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'

const Header = () => (
  <div className={classes.container}>
    <div className={classes.links}>
      <NavLink to="/list" activeClassName={classes.active}>
        Virtual Machines
      </NavLink>
      <NavLink to="/www" activeClassName={classes.active}>
        was in development
      </NavLink>
      <NavLink to="/w" activeClassName={classes.active}>
        was in development.
      </NavLink>
    </div>
  </div>
)
export default Header
