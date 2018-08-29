import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { snippetsReducer } from "../../snippets/store";

const rootReducer = combineReducers({
  snippets: snippetsReducer,
  form: formReducer
});

export default rootReducer;