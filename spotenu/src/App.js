import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  MuiThemeProvider,
  CssBaseline
} from "@material-ui/core";
import theme from "../../style/theme";
import Router from "../Router";
import { createStore, applyMiddleware } from "redux";


const middlewares = [
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(rootReducer, middlewares);

export const App = () => (
  <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router/>
      </MuiThemeProvider>
  </Provider>
);

export default App;

