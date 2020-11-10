import React from 'react'
import classes from './Profile.module.scss'

function Profile({ auth }) {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.photoWrapper}>
          <div className={classes.photoContainer}>
            <img
              src="https://i0.wp.com/blackyouthproject.com/wp-content/uploads/2017/04/stevie-steve.jpg?fit=531%2C432"
              alt="profile"
            />
          </div>
          {/* <div className={classes.editPhoto}>button</div> */}
        </div>
        <div className={classes.nameContainer}>
          <p className={classes.name}>
            {auth && auth.firstName} {auth && auth.lastName}
          </p>
          <p className={classes.login}>{auth.login}</p>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.dropdown}>
          {window.location.host}
        </div>
      </div>
    </div>
  )
}

export default Profile
