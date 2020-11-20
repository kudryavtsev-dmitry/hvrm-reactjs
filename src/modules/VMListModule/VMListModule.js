import { VMList } from 'components'
import { Loader } from 'components/UI'
import getFreeMemory from 'modules/MemoryModule/asyncActions/getFreeMemory'
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
  getFreeMemory,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [memoryOpen, setMemoryOpen] = useState(false)
  const [diskOpen, setDiskOpen] = useState(false)
  const [selectedVM, setSelectedVM] = useState({})
  const [selectedVMIndex, setSelectedVMIndex] = useState(
    null,
  )

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
    getFreeMemory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOpenModal = (vm) => {
    setIsOpen(true)
    setSelectedVM(vm)
  }
  const handleCloseModal = () => setIsOpen(false)

  const handleOpenMemoryModal = (machine, index) => {
    setSelectedVMIndex(index)
    setSelectedVM(machine)
    setMemoryOpen(true)
  }
  const handleCloseMemoryModal = () => {
    setMemoryOpen(false)
  }
  const handleOpenDiskModal = (machine, index) => {
    setSelectedVMIndex(index)
    setSelectedVM(machine)
    setDiskOpen(true)
  }
  const handleCloseDiskModal = () => {
    setDiskOpen(false)
  }

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
      handleOpenMemoryModal={handleOpenMemoryModal}
      handleCloseMemoryModal={handleCloseMemoryModal}
      memoryOpen={memoryOpen}
      handleOpenDiskModal={handleOpenDiskModal}
      handleCloseDiskModal={handleCloseDiskModal}
      diskOpen={diskOpen}
      selectedVMIndex={selectedVMIndex}
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
  getFreeMemory,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VMListModule)
