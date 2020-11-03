import { VMList } from 'components'
import { Loader } from 'components/UI'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getVirtualMachines } from './asyncActions/getVM'
import { startVM } from './asyncActions/startVM'
import { stopVM } from './asyncActions/stopVM'
import { suspendVM } from './asyncActions/suspendVM'
import { resumeVM } from './asyncActions/resumeVM'
import { saveVM } from './asyncActions/saveVM'
import { shutdownVM } from './asyncActions/shutdownVM'
import { restartVM } from './asyncActions/restartVM'

const VMListModule = ({
  getVirtualMachines,
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
    getVirtualMachines()
  }, [])

  const handleOpenModal = (vm) => {
    setIsOpen(true)
    setSelectedVM(vm)
  }
  const handleCloseModal = () => setIsOpen(false)

  const startButtonClick = (name) => {
    startVM(name)
  }

  const stopButtonClick = (name) => {
    stopVM(name)
  }

  const suspendButtonClick = (name) => {
    suspendVM(name)
  }

  const resumeButtonClick = (name) => {
    resumeVM(name)
  }

  const saveButtonClick = (name) => {
    saveVM(name)
  }

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
      startButtonClick={startButtonClick}
      stopButtonClick={stopButtonClick}
      suspendButtonClick={suspendButtonClick}
      resumeButtonClick={resumeButtonClick}
      saveButtonClick={saveButtonClick}
      shutdownVM={shutdownVM}
      restartVM={restartVM}
    />
  )
}

const mapStateToProps = ({ virtualMachines }) => ({
  virtualMachines,
})

const mapDispatchToProps = {
  getVirtualMachines,
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
