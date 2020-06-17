import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom"
import SignUpListener from '../SignUpListener'
import SignUpBand from '../SignUpBand'
import SignUpAdmin from '../SignUpAdmin'
import Login from '../Login'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <SignUpListener />
        </Route>

        <Route exact path="/band">
          <SignUpBand />
        </Route>

        <Route exact path="/admin">
          <SignUpAdmin />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default Router