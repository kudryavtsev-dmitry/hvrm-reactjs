import { Button, Loader, Switch } from 'components/UI'
import React from 'react'
import classes from './Memory.module.scss'
import { RangeInput } from './RangeInput'
import { SizeInput } from './SizeInput'

export default function Memory({
  vm,
  freeMemory,
  addMemory,
  selectedVMIndex,
  sturtupMemory,
  setSturtupMemory,
  memory,
  setIsDynamic,
  isDynamic,
  buffer,
  setBuffer,
  min,
  setMin,
  priority,
  setPriority,
  max,
  setMax,
  dynamicMemory,
}) {
  if (memory.loading) {
    return (
      <div className={classes.container}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <h3>Memory</h3>

      <div className={classes.sturtup}>
        <input
          type="range"
          id="startupMemory"
          name="startupMemory"
          min="0"
          value={sturtupMemory ? sturtupMemory : ''}
          step="2"
          onChange={(e) =>
            setSturtupMemory(+e.target.value)
          }
          max={freeMemory}
        />
        <label htmlFor="startupMemory">
          {sturtupMemory} MB Memory used
        </label>
      </div>

      <RangeInput
        value={priority}
        onChange={(e) => setPriority(+e.target.value)}
        Text="Priority"
      />

      <div className={classes.switch}>
        <Switch
          isOn={isDynamic}
          handleToggle={() => setIsDynamic(!isDynamic)}
        />
        <label
          style={{ marginLeft: '10px' }}
          htmlFor="dynamic"
        >
          Dynamic memory
        </label>
      </div>
      <div
        className={
          !isDynamic
            ? `${classes.disabled} ${classes.dynamicModule}`
            : classes.dynamicModule
        }
      >
        <SizeInput
          value={min}
          text="Minimum memory size: "
          onChange={(e) => setMin(e.target.value)}
        />
        <SizeInput
          value={max}
          text="Maximum memory size: "
          onChange={(e) => setMax(e.target.value)}
        />

        <RangeInput
          value={buffer}
          onChange={(e) => setBuffer(+e.target.value)}
          Text="Buffer"
        />
      </div>

      <div className={classes.saveBtn}>
        <Button
          onClick={
            isDynamic
              ? () =>
                  dynamicMemory(
                    vm.Name,
                    min,
                    max,
                    sturtupMemory,
                    priority,
                    buffer,
                    selectedVMIndex,
                  )
              : () =>
                  addMemory(
                    vm.Name,
                    sturtupMemory,
                    selectedVMIndex,
                  )
          }
          color={'primary'}
        >
          Save
        </Button>
      </div>
    </div>
  )
}
