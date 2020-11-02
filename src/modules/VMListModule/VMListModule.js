import { VMList } from 'components'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getVirtualMachines } from './asyncActions/getVM'

const VMListModule = ({
  getVirtualMachines,
  virtualMachines,
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
        return 'paused'
      default:
        break
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

  return (
    <VMList
      vm={virtualMachines.virtualMachines}
      getStatus={getStatus}
      isOpen={isOpen}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
      selectedVM={selectedVM}
    />
  )
}

const mapStateToProps = ({ virtualMachines }) => ({
  virtualMachines,
})

const mapDispatchToProps = {
  getVirtualMachines,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VMListModule)
