import React, { useCallback } from 'react'
import classes from './VMList.module.scss'
import { Modal } from 'components/UI/Modal'
import { VMInfoModule } from 'modules'
import { IconButton } from 'components/UI'
import { VM } from './VM/VM'

const VMList = ({
  vm,
  getStatus,
  isOpen,
  handleOpenModal,
  handleCloseModal,
  selectedVM,
  buttons,
  VMState,
  updateVM,
  updatingVM,
}) => {
  const renderButtons = useCallback(
    (machine, index) => {
      return (
        <div className={classes.buttons}>
          {buttons.map((button) => {
            if (button.state.includes(machine.State)) {
              return (
                <IconButton
                  icon={button.icon}
                  onClick={(event) => {
                    event.stopPropagation()
                    button.handler(machine.Name, index)
                  }}
                >
                  {button.text}
                </IconButton>
              )
            } else return null
          })}
        </div>
      )
    },
    [buttons],
  )

  return (
    <div className={classes.container}>
      {vm &&
        vm.map((machine, index) => (
          <VM
            machine={machine}
            index={index}
            VMState={VMState}
            updatingVM={updatingVM}
            renderButtons={renderButtons}
            updateVM={updateVM}
            handleOpenModal={handleOpenModal}
            getStatus={getStatus}
          />
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
