import { VMList } from 'components'
import { Loader } from 'components/UI'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getVM } from './asyncActions'
import { startVM } from './asyncActions'
import { stopVM } from './asyncActions'
import { suspendVM } from './asyncActions'
import { resumeVM } from './asyncActions'
import { saveVM } from './asyncActions'
import { shutdownVM } from './asyncActions'
import { restartVM } from './asyncActions'

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
      startVM={startVM}
      stopVM={stopVM}
      suspendVM={suspendVM}
      resumeVM={resumeVM}
      saveVM={saveVM}
      shutdownVM={shutdownVM}
      restartVM={restartVM}
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
