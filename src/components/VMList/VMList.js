import React from 'react'
import classes from './VMList.module.scss'
import vmImage from 'images/vm.png'
import { Modal } from 'components/UI/Modal'
import { VMInfoModule } from 'modules'
import { IconButton, Loader } from 'components/UI'

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
  return (
    <div className={classes.container}>
      {vm &&
        vm.map((machine, index) => (
          <div className={classes.wrapper} key={index}>
            <div
              className={classes.vm}
              onClick={() => handleOpenModal(machine)}
            >
              <div className={classes.vmWrapper}>
                <i
                  onClick={(e) => {
                    e.stopPropagation()
                    updateVM(machine.Name, index)
                  }}
                  className={
                    index === updatingVM
                      ? 'fa fa-refresh' +
                        ' ' +
                        classes.disable
                      : 'fa fa-refresh'
                  }
                  aria-hidden="true"
                ></i>
                <img src={vmImage} alt="virtual machine" />
              </div>
              {index === updatingVM ? (
                <Loader />
              ) : (
                <>
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
                </>
              )}
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
