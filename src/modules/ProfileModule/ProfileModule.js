import { Profile } from 'components'
import React from 'react'
import { connect } from 'react-redux'

const ProfileModule = ({ auth }) => <Profile auth={auth} />

const mapStateToProps = ({ auth }) => ({
  auth,
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileModule)
