import classes from './Buttons.module.scss'
import { IconButton } from 'components/UI'
import React from 'react'

export default function Buttons({ state }) {
  console.log(state)
  if (state === 3) {
    return (
      <div className={classes.container}>
        <IconButton>
          <i
            className="fa fa-power-off"
            aria-hidden="true"
          ></i>
          Enable
        </IconButton>
      </div>
    )
  } else if (state === 2) {
    return (
      <div className={classes.container}>
        <IconButton>
          <i
            className="fa fa-stop-circle-o"
            aria-hidden="true"
          ></i>
          Disable
        </IconButton>
        <IconButton>
          <i
            className="fa fa-power-off"
            aria-hidden="true"
          ></i>
          Shutdown
        </IconButton>
        <IconButton>
          <i
            className="fa fa-floppy-o"
            aria-hidden="true"
          ></i>
          Save
        </IconButton>
        <IconButton>
          <i className="fa fa-pause" aria-hidden="true"></i>
          Pause
        </IconButton>
        <IconButton>
          <i className="fa fa-undo" aria-hidden="true"></i>
          Reset
        </IconButton>
      </div>
    )
  } else if (state === 9) {
    return (
      <div className={classes.container}>
        <IconButton>
          <i
            className="fa fa-stop-circle-o"
            aria-hidden="true"
          ></i>
          Disable
        </IconButton>
        <IconButton>
          <i
            className="fa fa-floppy-o"
            aria-hidden="true"
          ></i>
          Save
        </IconButton>
        <IconButton>
          <i className="fa fa-play" aria-hidden="true"></i>
          Resume
        </IconButton>
        <IconButton>
          <i className="fa fa-undo" aria-hidden="true"></i>
          Reset
        </IconButton>
      </div>
    )
  }
}
