import { VMList } from 'components'
import { Loader } from 'components/UI'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  getVM,
  startVM,
  stopVM,
  suspendVM,
  resumeVM,
  saveVM,
  shutdownVM,
  restartVM,
  updateVM,
} from './asyncActions'

const VMListModule = ({
  getVM,
  virtualMachines,
  startVM,
  stopVM,
  suspendVM,
  resumeVM,
  saveVM,
  shutdownVM,
  restartVM,
  updateVM,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedVM, setSelectedVM] = useState({})

  const VMState = {
    offline: 3,
    online: 2,
    suspended: 9,
    saved: 6,
  }

  const createButton = (icon, handler, state, text) => {
    return {
      icon: `fa ${icon}`,
      handler,
      state,
      text,
    }
  }

  const buttons = [
    createButton(
      'fa-power-off',
      startVM,
      [VMState.offline, VMState.saved],
      'Power On',
    ),
    createButton(
      'fa-stop-circle-o',
      stopVM,
      [VMState.online, VMState.suspended],
      'Power Off',
    ),
    createButton(
      'fa-power-off',
      shutdownVM,
      [VMState.online],
      'Shutdown',
    ),
    createButton(
      'fa-pause',
      suspendVM,
      [VMState.online],
      'Suspend',
    ),
    createButton(
      'fa-play',
      resumeVM,
      [VMState.suspended],
      'Resume',
    ),
    createButton(
      'fa-floppy-o',
      saveVM,
      [VMState.suspended, VMState.online],
      'Save',
    ),
    createButton(
      'fa-undo',
      restartVM,
      [VMState.suspended, VMState.online, VMState.saved],
      'Restart',
    ),
  ]

  const getStatus = (status) => {
    switch (status) {
      case 3:
        return 'offline'
      case 2:
        return 'online'
      case 9:
        return 'suspended'
      case 6:
        return 'saved'
      default:
        return 'unknown'
    }
  }

  useEffect(() => {
    getVM()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOpenModal = (vm) => {
    setIsOpen(true)
    setSelectedVM(vm)
  }
  const handleCloseModal = () => setIsOpen(false)

  if (virtualMachines.loading) {
    return <Loader />
  }

  return (
    <VMList
      vm={virtualMachines.virtualMachines}
      updatingVM={virtualMachines.updatingVM}
      getStatus={getStatus}
      isOpen={isOpen}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
      selectedVM={selectedVM}
      buttons={buttons}
      VMState={VMState}
      updateVM={updateVM}
    />
  )
}

const mapStateToProps = ({ virtualMachines }) => ({
  virtualMachines,
})

const mapDispatchToProps = {
  getVM,
  startVM,
  stopVM,
  suspendVM,
  resumeVM,
  saveVM,
  shutdownVM,
  restartVM,
  updateVM,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VMListModule)
