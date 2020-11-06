import React from 'react'
import classes from './VMList.module.scss'
import vmImage from 'images/vm.png'
import { Modal } from 'components/UI/Modal'
import { VMInfoModule } from 'modules'
import { IconButton } from 'components/UI'

const VMList = ({
  vm,
  getStatus,
  isOpen,
  handleOpenModal,
  handleCloseModal,
  selectedVM,
  buttons,
  VMState,
}) => {
  return (
    <div className={classes.container}>
      {vm &&
        vm.map((machine, index) => (
          <div className={classes.wrapper} key={index}>
            <div
              className={classes.vm}
              onClick={() => handleOpenModal(machine)}
            >
              <img src={vmImage} alt="virtual machine" />
              <div>
                <p className={classes.name}>
                  {machine.Name}
                </p>
                <p
                  className={
                    machine.State === VMState.online
                      ? classes.online
                      : classes.offline
                  }
                >
                  {getStatus(machine.State)}
                </p>
              </div>

              <div className={classes.buttons}>
                {buttons.map((button) => {
                  if (
                    button.state.includes(machine.State)
                  ) {
                    return (
                      <IconButton
                        icon={button.icon}
                        onClick={(event) => {
                          event.stopPropagation()
                          button.handler(machine.Name)
                        }}
                      >
                        {button.text}
                      </IconButton>
                    )
                  } else return null
                })}
              </div>
            </div>
          </div>
        ))}
      <Modal open={isOpen} onCLose={handleCloseModal}>
        <VMInfoModule
          vm={selectedVM}
          getStatus={getStatus}
        />
      </Modal>
    </div>
  )
}

export default VMList
