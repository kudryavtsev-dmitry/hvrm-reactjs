import React from 'react'
import classes from './FreeMemoryBar.module.scss'

export const FreeMemoryBar = ({
  vm,
  server,
  total,
  free,
  loading,
}) => {
  if (loading) {
    return (
      <div>
        <div className={classes.textContainer}>
          <p>Getting memory info...</p>
        </div>
        <div className={classes.container}>
          <div className={classes.loader}></div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className={classes.textContainer}>
        {vm ? (
          <div style={{ width: `${(vm * 100) / total}%` }}>
            <p className={classes.name}>Vm</p>
            <p>{vm}MB</p>
          </div>
        ) : null}

        <div
          style={{ width: `${(server * 100) / total}%` }}
        >
          <p className={classes.name}>Server</p>
          <p>{server}MB</p>
        </div>
        <div style={{ width: `${(free * 100) / total}%` }}>
          <p className={classes.name}>Free</p>
          <p>{free}MB</p>
        </div>
      </div>
      <div className={classes.container}>
        <div
          className={classes.virtual}
          style={{ width: `${(vm * 100) / total}%` }}
        ></div>
        <div
          className={classes.used}
          style={{ width: `${(server * 100) / total}%` }}
        ></div>
        <div
          className={classes.free}
          style={{ width: `${(free * 100) / total + 1}%` }}
        ></div>
      </div>
    </div>
  )
}
