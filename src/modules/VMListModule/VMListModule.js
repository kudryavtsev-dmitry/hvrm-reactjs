import { VMList } from 'components'
import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getVirtualMachines } from './asyncActions/getVM'

const VMListModule = ({
  getVirtualMachines,
  virtualMachines,
}) => {
  const getStatus = (status) => {
    switch (status) {
      case 3:
        return 'offline'
      case 2:
        return 'online'
      default:
        break
    }
  }

  useEffect(() => {
    getVirtualMachines()
  }, [])

  return (
    <VMList
      vm={virtualMachines.virtualMachines}
      getStatus={getStatus}
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
