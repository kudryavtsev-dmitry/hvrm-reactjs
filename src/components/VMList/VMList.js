import React from 'react'
import classes from './VMList.module.scss'
import vmImage from 'images/vm.png'
import { Modal } from 'components/UI/Modal'
import { VMInfoModule } from 'modules'
import Buttons from './Buttons/Buttons'

const VMList = ({
  vm,
  getStatus,
  isOpen,
  handleOpenModal,
  handleCloseModal,
  selectedVM,
}) => {
  return (
    <div className={classes.container}>
      {vm &&
        vm.map((machine, index) => (
          <div className={classes.wrapper}>
            <div
              key={index}
              className={classes.vm}
              onClick={() => handleOpenModal(machine)}
            >
              <img src={vmImage} alt="virtual machine" />
              <p className={classes.name}>{machine.Name}</p>
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
            <Buttons state={machine.State} />
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
