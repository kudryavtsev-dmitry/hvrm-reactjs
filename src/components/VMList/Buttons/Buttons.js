import classes from './Buttons.module.scss'
import React from 'react'
import { TurnOnButton } from './TurnOnButton'
import { TurnOffButton } from './TurnOffButton'
import { ShutDownButton } from './ShutDownButton'
import { SaveButton } from './SaveButton'
import { SuspendButton } from './SuspendButton'
import { RestartButton } from './RestartButton/inedex'
import { ResumeButton } from './ResumeButton'

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
        <TurnOnButton
          onClick={() => startVM(machine.Name)}
        />
      </div>
    )
  } else if (machine.State === 2) {
    return (
      <div className={classes.container}>
        <TurnOffButton
          onClick={() => stopVM(machine.Name)}
        />

        <ShutDownButton
          onClick={() => shutdownVM(machine.Name)}
        />

        <SaveButton onClick={() => saveVM(machine.Name)} />

        <SuspendButton
          onClick={() => suspendVM(machine.Name)}
        />

        <RestartButton
          onClick={() => restartVM(machine.Name)}
        />
      </div>
    )
  } else if (machine.State === 9) {
    return (
      <div className={classes.container}>
        <TurnOffButton
          onClick={() => stopVM(machine.Name)}
        />

        <SaveButton onClick={() => saveVM(machine.Name)} />

        <ResumeButton
          onClick={() => resumeVM(machine.Name)}
        />

        <RestartButton
          onClick={() => restartVM(machine.Name)}
        />
      </div>
    )
  }
}
