import { Button, Loader } from 'components/UI'
import React from 'react'
import classes from './HardDisk.module.scss'

const HardDisk = ({ disk, diskSize, setDiskSize }) => {
  if (disk.loading) {
    return (
      <div className={classes.container}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <h3>Hard disk</h3>
      <div className={classes.sizeInfo}>
        <div className={classes.size}>
          <p>Size : </p>
          <p>{disk.vmTotal} GB</p>
        </div>
        <div className={classes.size}>
          <p>Used : </p>
          <p>{disk.vmUsed && disk.vmUsed.toFixed(1)} GB</p>
        </div>
      </div>
      <div>
        <p>Change size :</p>
        <input
          id="size"
          type="text"
          value={diskSize}
          onChange={(e) => setDiskSize(e.target.value)}
        />
        <label htmlFor="size">GB</label>
      </div>
      <div className={classes.saveBtn}>
        <Button
          color={'primary'}
          onClick={() => console.log(diskSize)}
        >
          Save
        </Button>
      </div>
    </div>
  )
}

export default HardDisk
