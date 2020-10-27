import React from 'react'
import './App.scss'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from "./components/Layout/Layout";
import {useSelector} from "react-redux";
import AuthModule from "modules/AuthModule/AuthModule";
import RegistrationModule from 'modules/AuthModule/RegistrationModule'


const App = () => {

    const isAuth = useSelector(state => state.auth.isAuth)

    return (
        <Router>
            <div className="App-container">
                {
                    isAuth ?
                        <Switch>
                            <Route path="/" component={Layout}/>
                        </Switch>
                        :
                        <Switch>
                            <Route path="/auth" component={AuthModule}/>
                            <Route path="/registration" component={RegistrationModule}/>
                            <Redirect to="/auth"/>
                        </Switch>
                }
            </div>
            <ToastContainer/>
        </Router>
    )
}

export default App
