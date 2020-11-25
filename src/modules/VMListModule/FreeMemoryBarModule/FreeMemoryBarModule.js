import { FreeMemoryBar } from 'components/VMList/FreeMemoryBar'
import React from 'react'
import { connect } from 'react-redux'

const FreeMemoryBarModule = ({
  memory,
  virtualMachines,
}) => {
  let initialValue = 0

  const vmUsedMemory = virtualMachines.virtualMachines.reduce(
    (acc, current) => acc + current.MemoryAssigned,
    initialValue,
  )

  const usedByServer = Math.floor(
    memory.total - (memory.free + vmUsedMemory),
  )

  const total = Math.floor(memory.total)

  const free = Math.floor(memory.free)

  return (
    <FreeMemoryBar
      loading={memory.loading}
      vm={vmUsedMemory}
      server={usedByServer}
      total={total}
      free={free}
    />
  )
}

const mapStateToProps = ({ memory, virtualMachines }) => ({
  memory,
  virtualMachines,
})
export default connect(
  mapStateToProps,
  null,
)(FreeMemoryBarModule)
