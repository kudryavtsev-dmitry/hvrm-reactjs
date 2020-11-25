import { HardDisk } from 'components/HardDisk'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  getDiskData,
  resizeDisk,
  convertDisk,
  changeType,
} from './asyncActions'

const HardDiskModule = ({
  vm,
  getDiskData,
  disk,
  resizeDisk,
  convertDisk,
  changeType,
}) => {
  const [diskSize, setDiskSize] = useState(null)
  const [diskType, setDiskType] = useState(null)

  useEffect(() => {
    getDiskData(vm.Name)
  }, [])

  useEffect(() => {
    setDiskType(disk.type)
    setDiskSize(disk.vmTotal)
  }, [disk])

  const handleTypeChange = (e) => {
    setDiskType(+e.target.value)
  }

  return (
    <HardDisk
      name={vm.Name}
      disk={disk}
      diskSize={diskSize}
      setDiskSize={setDiskSize}
      resizeDisk={resizeDisk}
      convertDisk={convertDisk}
      handleTypeChange={handleTypeChange}
      diskType={diskType}
      changeType={changeType}
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
  changeType,
}
export default connect(
  mapStateToProrps,
  mapDispatchToProps,
)(HardDiskModule)
