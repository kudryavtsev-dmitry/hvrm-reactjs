import { Memory } from 'components'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
  addMemory,
  getMemory,
  dynamicMemory,
} from './asyncActions'

function MemoryModule({
  vm,
  memory,
  selectedVMIndex,
  addMemory,
  getMemory,
  dynamicMemory,
}) {
  const [sturtupMemory, setSturtupMemory] = useState(null)
  const [isDynamic, setIsDynamic] = useState(null)
  const [buffer, setBuffer] = useState(null)
  const [min, setMin] = useState(null)
  const [max, setMax] = useState(null)
  const [priority, setPriority] = useState(null)

  useEffect(() => {
    setSturtupMemory(memory.startup)
    setIsDynamic(memory.dynamic)
    setPriority(memory.priority)
    setMin(memory.minimum)
    setMax(memory.maximum)
    setBuffer(memory.buffer)
  }, [memory])

  useEffect(() => {
    getMemory(vm.Name)
  }, [])
  return (
    <Memory
      buffer={buffer}
      setBuffer={setBuffer}
      min={min}
      setMin={setMin}
      priority={priority}
      setPriority={setPriority}
      max={max}
      setMax={setMax}
      setIsDynamic={setIsDynamic}
      isDynamic={isDynamic}
      setSturtupMemory={setSturtupMemory}
      sturtupMemory={sturtupMemory}
      memory={memory}
      vm={vm}
      freeMemory={memory.free}
      addMemory={addMemory}
      selectedVMIndex={selectedVMIndex}
      dynamicMemory={dynamicMemory}
    />
  )
}

const mapDispatchToProps = {
  addMemory,
  getMemory,
  dynamicMemory,
}

const mapStateToProps = ({ memory }) => ({
  memory,
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MemoryModule)
