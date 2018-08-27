import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { App } from "./containers";
import registerServiceWorker from './registerServiceWorker';
import store from "./store";

import "whatwg-fetch";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
