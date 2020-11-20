import { HardDisk } from 'components/HardDisk'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getDiskData } from './asyncActions'

const HardDiskModule = ({
  vm,
  selectedVMIndex,
  getDiskData,
  disk,
}) => {
  const [diskSize, setDiskSize] = useState(null)

  useEffect(() => {
    getDiskData(vm.Name)
  }, [])
  useEffect(() => {
    setDiskSize(disk.vmTotal)
  }, [disk])

  return (
    <HardDisk
      disk={disk}
      diskSize={diskSize}
      setDiskSize={setDiskSize}
    />
  )
}

const mapStateToProrps = ({ disk }) => ({
  disk,
})

const mapDispatchToProps = {
  getDiskData,
}
export default connect(
  mapStateToProrps,
  mapDispatchToProps,
)(HardDiskModule)
