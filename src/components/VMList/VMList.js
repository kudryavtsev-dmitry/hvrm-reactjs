import React from 'react'
import classes from './VMList.module.scss'
import vmImage from 'images/vm.png'

const VMList = ({ vm, getStatus }) => {
  return (
    <div className={classes.container}>
      {vm &&
        vm.map((machine, index) => (
          <div key={index} className={classes.vm}>
            <img src={vmImage} alt="virtual machine" />
            {machine.Name}
            <p
              className={
                machine.State === 2
                  ? classes.online
                  : classes.offline
              }
            >
              {getStatus(machine.State)}
            </p>
          </div>
        ))}
    </div>
  )
}

export default VMList
