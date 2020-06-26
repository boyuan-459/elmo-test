import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'containers/Home'
import Profile from 'containers/Profile'
import Nav from 'containers/Nav'

const AppRouter = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path='/profile/:id'>
                    <Profile />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter
