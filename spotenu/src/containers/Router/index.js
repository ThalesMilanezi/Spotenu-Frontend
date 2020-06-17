import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom"
import SignUpListener from '../SignUpListener'
import SignUpBand from '../SignUpBand'
import SignUpAdmin from '../SignUpAdmin'
import Login from '../Login'
import BandApprove from '../BandAprove'
import HomePage from '../Home'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/band">
          <SignUpBand />
        </Route>

        <Route exact path="/admin">
          <SignUpAdmin />
        </Route>

        <Route exact path="/Listener">
          <SignUpListener />
        </Route>

        <Route exact path="/aprovation">
          <BandApprove />
        </Route>

        <Route exact path="/home">
          <HomePage />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default Router