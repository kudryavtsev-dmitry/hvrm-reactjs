import { VMListModule } from 'modules'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

const Layout = () => {
  return (
    <Switch>
      <Route path="/list" component={VMListModule} />
      <Redirect to="list" />
    </Switch>
  )
}

export default Layout
