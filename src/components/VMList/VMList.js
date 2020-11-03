import React from 'react'
import classes from './VMList.module.scss'
import vmImage from 'images/vm.png'
import { Modal } from 'components/UI/Modal'
import { VMInfoModule } from 'modules'
import Buttons from './Buttons/Buttons'
import { Loader } from 'components/UI'

const VMList = ({
  vm,
  getStatus,
  isOpen,
  handleOpenModal,
  handleCloseModal,
  selectedVM,
  startButtonClick,
  stopButtonClick,
  suspendButtonClick,
  resumeButtonClick,
  saveButtonClick,
  shutdownVM,
  restartVM,
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
            <Buttons
              machine={machine}
              startButtonClick={startButtonClick}
              stopButtonClick={stopButtonClick}
              suspendButtonClick={suspendButtonClick}
              resumeButtonClick={resumeButtonClick}
              saveButtonClick={saveButtonClick}
              shutdownVM={shutdownVM}
              restartVM={restartVM}
            />
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
