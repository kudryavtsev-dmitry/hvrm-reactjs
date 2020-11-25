import { Button, Loader } from 'components/UI'
import React from 'react'
import classes from './HardDisk.module.scss'

const HardDisk = ({
  disk,
  diskSize,
  setDiskSize,
  resizeDisk,
  name,
  convertDisk,
  handleTypeChange,
  diskType,
  changeType,
}) => {
  const diskTypes = {
    Dynamic: 3,
    Fixed: 2,
  }

  if (disk.loading) {
    return (
      <div className={classes.container}>
        <h3>Loading disk data...</h3>
        <Loader />
      </div>
    )
  }

  if (disk.converting) {
    return (
      <div className={classes.container}>
        <h3>Converting disk...</h3>
        <h5>might take a few minutes</h5>
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
      <div className={classes.wrapper}>
        <div className={classes.sizeWrapper}>
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
          <Button
            disabled={disk.vmTotal === diskSize}
            color={'primary'}
            onClick={() => {
              resizeDisk(name, +diskSize, disk.path)
            }}
          >
            Save size
          </Button>
        </div>
        <div className={classes.type}>
          <div
            onChange={(e) => handleTypeChange(e)}
            className={classes.radio}
          >
            <input
              type="radio"
              id="contactChoice1"
              name="type"
              value={diskTypes.Fixed}
              checked={diskType === diskTypes.Fixed}
            />
            <label htmlFor="contactChoice1">Fixed</label>
            <input
              type="radio"
              id="contactChoice2"
              name="type"
              value={diskTypes.Dynamic}
              checked={diskType === diskTypes.Dynamic}
            />
            <label htmlFor="contactChoice2">Dynamic</label>
          </div>
          <div>
            <Button
              disabled={disk.type === diskType}
              color={'primary'}
              onClick={() =>
                changeType(disk.path, name, diskType)
              }
            >
              Change
            </Button>
          </div>
        </div>
        <div className={classes.format}>
          <p>
            Format : {disk.format == '3' ? 'VHDX' : 'VHD'}
          </p>
          <div>
            <Button
              color={'primary'}
              onClick={() => convertDisk(name, disk.path)}
            >
              Change
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HardDisk
