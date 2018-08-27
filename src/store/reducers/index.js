import { combineReducers } from "redux";

import { snippetsReducer } from "../../snippets/store";

const rootReducer = combineReducers({
  snippets: snippetsReducer
});

export default rootReducer;