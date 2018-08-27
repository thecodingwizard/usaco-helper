import * as actions from "../actions/snippets.actions";

const initialState = {
  loading: true,
  snippets: []
};

const snippetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SYNC_SNIPPETS_LIST: {
      return {
        ...state,
        snippets: action.payload,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
}

export default snippetsReducer;