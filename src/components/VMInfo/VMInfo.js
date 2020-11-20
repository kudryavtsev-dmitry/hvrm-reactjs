import React from 'react'
import classes from './VMInfo.module.scss'

export default function VMInfo({ targetVM, getStatus }) {
  return (
    <div className={classes.container}>
      <div>
        <p>Name:</p>
        {targetVM.Name}
      </div>
      <div>
        <p>State:</p>
        {getStatus(targetVM.State)}
      </div>
      <div>
        <p>CPU usage:</p>
        {targetVM.CPUUsage}%
      </div>
      <div>
        <p>Memory assigned:</p>
        {targetVM.MemoryAssigned} MB
      </div>
      <div>
        <p>Uptime:</p>
        {targetVM.Uptime.Hours}h {targetVM.Uptime.Minutes}m{' '}
        {targetVM.Uptime.Seconds}s
      </div>
      <div>
        <p>Status:</p>
        {targetVM.Status}
      </div>
      <div>
        <p>Version:</p>
        {targetVM.Version}
      </div>
    </div>
  )
}
