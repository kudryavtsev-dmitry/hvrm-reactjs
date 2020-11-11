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
}) => (
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
              ? 'fa fa-refresh' + ' ' + classes.disable
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
          </div>

          {renderButtons(machine, index)}
        </>
      )}
    </div>
  </div>
)
