import React from 'react'
import './App.scss'
import Auth from './components/Auth'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Registration from './components/Registration'
import Layout from "./components/Layout/Layout";
import {useSelector} from "react-redux";


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
                            <Route path="/auth" component={Auth}/>
                            <Route path="/registration" component={Registration}/>
                            <Redirect to="/auth"/>
                        </Switch>
                }
            </div>
            <ToastContainer/>
        </Router>
    )
}

export default App
