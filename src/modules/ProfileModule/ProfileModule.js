import { Profile } from 'components'
import React from 'react'
import { connect } from 'react-redux'

export const ProfileModule = () => {
  return <Profile />
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileModule)
