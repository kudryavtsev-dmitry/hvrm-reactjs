import classes from './Buttons.module.scss'
import { IconButton } from 'components/UI'
import React from 'react'

export default function Buttons({
  machine,
  startVM,
  stopVM,
  suspendVM,
  resumeVM,
  saveVM,
  shutdownVM,
  restartVM,
}) {
  if (machine.State === 3 || machine.State === 6) {
    return (
      <div className={classes.container}>
        <IconButton onClick={() => startVM(machine.Name)}>
          <i
            className="fa fa-power-off"
            aria-hidden="true"
          ></i>
          Turn on
        </IconButton>
      </div>
    )
  } else if (machine.State === 2) {
    return (
      <div className={classes.container}>
        <IconButton onClick={() => stopVM(machine.Name)}>
          <i
            className="fa fa-stop-circle-o"
            aria-hidden="true"
          ></i>
          Turn off
        </IconButton>
        <IconButton
          onClick={() => shutdownVM(machine.Name)}
        >
          <i
            className="fa fa-power-off"
            aria-hidden="true"
          ></i>
          Shut down
        </IconButton>
        <IconButton onClick={() => saveVM(machine.Name)}>
          <i
            className="fa fa-floppy-o"
            aria-hidden="true"
          ></i>
          Save
        </IconButton>
        <IconButton onClick={() => suspendVM(machine.Name)}>
          <i className="fa fa-pause" aria-hidden="true"></i>
          Suspend
        </IconButton>
        <IconButton onClick={() => restartVM(machine.Name)}>
          <i className="fa fa-undo" aria-hidden="true"></i>
          Restart
        </IconButton>
      </div>
    )
  } else if (machine.State === 9) {
    return (
      <div className={classes.container}>
        <IconButton onClick={() => stopVM(machine.Name)}>
          <i
            className="fa fa-stop-circle-o"
            aria-hidden="true"
          ></i>
          Turn off
        </IconButton>

        <IconButton onClick={() => saveVM(machine.Name)}>
          <i
            className="fa fa-floppy-o"
            aria-hidden="true"
          ></i>
          Save
        </IconButton>
        <IconButton onClick={() => resumeVM(machine.Name)}>
          <i className="fa fa-play" aria-hidden="true"></i>
          Resume
        </IconButton>
        <IconButton onClick={() => restartVM(machine.Name)}>
          <i className="fa fa-undo" aria-hidden="true"></i>
          Restart
        </IconButton>
      </div>
    )
  }
}
