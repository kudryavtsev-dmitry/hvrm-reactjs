import { Loader } from 'components/UI'
import React from 'react'
import vmImage from 'images/vm.png'
import classes from '../VMList.module.scss'

export const VM = ({
  index,
  machine,
  updatingVM,
  handleOpenModal,
  updateVM,
  getStatus,
  renderButtons,
  VMState,
  handleOpenMemoryModal,
  handleOpenDiskModal,
}) => (
  <div className={classes.wrapper}>
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
              ? `fa fa-refresh ${classes.disable}`
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
            <p className={classes.name}>{machine.Name}</p>
            <p
              className={
                machine.State === VMState.online
                  ? classes.online
                  : classes.offline
              }
            >
              {getStatus(machine.State)}
            </p>
            {machine.State === VMState.online ? (
              <p className={classes.memory}>
                Memory assigned {machine.MemoryAssigned} MB
              </p>
            ) : (
              <>
                <p
                  className={classes.memory}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleOpenMemoryModal(machine, index)
                  }}
                >
                  Memory settings
                </p>
                <p
                  className={classes.memory}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleOpenDiskModal(machine, index)
                  }}
                >
                  Disk settings
                </p>
              </>
            )}
          </div>

          {renderButtons(machine, index)}
        </>
      )}
    </div>
  </div>
)
