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
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedVM, setSelectedVM] = useState({})

  const VMState = {
    offline: 3,
    online: 2,
    suspended: 9,
    saved: 6,
  }

  const buttons = [
    {
      icon: 'fa fa-power-off',
      handler: startVM,
      state: [VMState.offline, VMState.saved],
      text: 'Power On',
    },
    {
      icon: 'fa fa-stop-circle-o',
      handler: stopVM,
      state: [VMState.online, VMState.suspended],
      text: 'Power Off',
    },
    {
      icon: 'fa fa-power-off',
      handler: shutdownVM,
      state: [VMState.online],
      text: 'Shutdown',
    },
    {
      icon: 'fa fa-pause',
      handler: suspendVM,
      state: [VMState.online],
      text: 'Suspend',
    },
    {
      icon: 'fa fa-play',
      handler: resumeVM,
      state: [VMState.suspended],
      text: 'Resume',
    },
    {
      icon: 'fa fa-floppy-o',
      handler: saveVM,
      state: [VMState.suspended, VMState.online],
      text: 'Save',
    },
    {
      icon: 'fa fa-undo',
      handler: restartVM,
      state: [
        VMState.suspended,
        VMState.online,
        VMState.saved,
      ],
      text: 'Restart',
    },
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
      getStatus={getStatus}
      isOpen={isOpen}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
      selectedVM={selectedVM}
      buttons={buttons}
      VMState={VMState}
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VMListModule)
