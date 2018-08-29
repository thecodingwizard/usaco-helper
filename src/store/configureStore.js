import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { connectRouter, routerMiddleware } from "connected-react-router";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const configureStore = (history) => {
  const sagaMiddleware = createSagaMiddleware();
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionsBlacklist: [
        "@@router/LOCATION_CHANGE",
        "@@redux-form/REGISTER_FIELD",
        "@@redux-form/FOCUS",
        "@@redux-form/CHANGE",
        "@@redux-form/BLUR",
        "@@redux-form/TOUCH",
        "@@redux-form/SET_SUBMIT_SUCCEEDED",
        "@@redux-form/DESTROY"
      ]
    })
    : compose;
  const enhancers = composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    )
  );
  
  const store = createStore(
    connectRouter(history)(rootReducer),
    enhancers
  );
  
  sagaMiddleware.run(rootSaga);
  
  return store;
};

export default configureStore;