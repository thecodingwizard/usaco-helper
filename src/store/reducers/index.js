import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";

import { snippetsReducer } from "../../snippets/store";

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  snippets: snippetsReducer,
  form: formReducer
});

export default rootReducer;