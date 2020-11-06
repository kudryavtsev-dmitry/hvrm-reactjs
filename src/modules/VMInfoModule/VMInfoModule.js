import { VMInfo } from 'components'
import React from 'react'
import { connect } from 'react-redux'

const VMInfoModule = ({
  virtualMachines,
  vm,
  getStatus,
}) => {
  const targetVM = virtualMachines.virtualMachines.find(
    (machine) => machine.Name === vm.Name,
  )

  return (
    <VMInfo targetVM={targetVM} getStatus={getStatus} />
  )
}

const mapStateToProps = ({ virtualMachines }) => ({
  virtualMachines,
})

export default connect(mapStateToProps, null)(VMInfoModule)
