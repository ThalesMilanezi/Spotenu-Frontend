import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  MuiThemeProvider,
  CssBaseline
} from "@material-ui/core";
import theme from "../src/style/theme"
import Router from "../src/containers/Router";
import { rootReducer } from '../src/reducers/index'
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({ reducer: rootReducer })

export const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </MuiThemeProvider>
  </Provider>
);

export default App;
