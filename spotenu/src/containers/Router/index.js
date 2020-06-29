import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom"
import SignUpListener from '../SignUpListener'
import SignUpBand from '../SignUpBand'
import SignUpAdmin from '../SignUpAdmin'
import Login from '../Login'
import BandApprove from '../BandAprove'
import HomePage from '../Home'
import GenderPage from '../Gender/index'
import AlbunsPage from '../Albuns/index'
import MusicPage from '../Musics/index'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/signup/band">
          <SignUpBand />
        </Route>

        <Route exact path="/signup/admin">
          <SignUpAdmin />
        </Route>

        <Route exact path="/signup/listener">
          <SignUpListener />
        </Route>

        <Route exact path="/band/approve">
          <BandApprove />
        </Route>

        <Route exact path="/home">
          <HomePage />
        </Route>

        <Route exact path="/gender">
          <GenderPage />
        </Route>

        <Route exact path="/album">
          <AlbunsPage />
        </Route>

        <Route exact path="/music">
          <MusicPage />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default Router