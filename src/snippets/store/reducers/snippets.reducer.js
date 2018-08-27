import { actions } from "../actions";

const initialState = {
  loading: false,
  snippets: []
};

const snippetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SNIPPET_LIST.GET: {
      return {
        ...state,
        loading: true
      };
    }
    default: {
      return state;
    }
  }
}

export default snippetsReducer;