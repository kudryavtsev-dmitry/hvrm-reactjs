import React from 'react'
import classes from './App.module.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Layout } from 'components/Layout'
import AuthModule from 'modules/AuthModule/AuthModule'
import { RegistrationModule } from 'modules'
import { connect } from 'react-redux'

const AppModule = ({ auth }) => {
  const isAuth = auth.isAuth

  return (
    <Router>
      <div className={classes.container}>
        {isAuth ? (
          <Switch>
            <Route path="/" component={Layout} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/auth" component={AuthModule} />
            <Route
              path="/registration"
              component={RegistrationModule}
            />
            <Redirect to="/auth" />
          </Switch>
        )}
      </div>
      <ToastContainer />
    </Router>
  )
}
const mapStateToProps = ({ auth }) => ({
  auth,
})

export default connect(mapStateToProps, null)(AppModule)
