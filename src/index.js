import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { App } from "./containers";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./store/configureStore";

import "whatwg-fetch";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
