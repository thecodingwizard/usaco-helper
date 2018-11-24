import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { create as createJss } from "jss";
import preset from "jss-preset-default";
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName, createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import { App } from "./containers";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./store/configureStore";

import "whatwg-fetch";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});
const store = configureStore(history);

const jss = createJss(preset());
const generateClassName = createGenerateClassName();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </JssProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
