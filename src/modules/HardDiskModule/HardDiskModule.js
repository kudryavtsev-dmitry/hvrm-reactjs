import { HardDisk } from 'components/HardDisk'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  getDiskData,
  resizeDisk,
  convertDisk,
} from './asyncActions'

const HardDiskModule = ({
  vm,
  selectedVMIndex,
  getDiskData,
  disk,
  resizeDisk,
  convertDisk,
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
      name={vm.Name}
      disk={disk}
      diskSize={diskSize}
      setDiskSize={setDiskSize}
      resizeDisk={resizeDisk}
      convertDisk={convertDisk}
    />
  )
}

const mapStateToProrps = ({ disk }) => ({
  disk,
})

const mapDispatchToProps = {
  getDiskData,
  resizeDisk,
  convertDisk,
}
export default connect(
  mapStateToProrps,
  mapDispatchToProps,
)(HardDiskModule)
