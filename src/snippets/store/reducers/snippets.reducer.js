import * as actions from "../actions/snippets.actions";

const initialState = {
  loading: false,
  formLoading: false,
  snippets: [],
  selectedSnippet: null
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
    case actions.UPDATE_SNIPPET_SUCCESS:
    case actions.CREATE_NEW_SNIPPET_SUCCESS: {
      return {
        ...state,
        formLoading: false,
        selectedSnippet: action.payload
      }
    }
    case actions.SYNC_SELECTED_SNIPPET: {
      return {
        ...state,
        loading: false,
        selectedSnippet: action.payload
      }
    }
    case actions.DELETE_SNIPPET:
    case actions.CREATE_NEW_SNIPPET:
    case actions.UPDATE_SNIPPET: {
      return {
        ...state,
        formLoading: true
      };
    }
    case actions.DELETE_SNIPPET_SUCCESS: {
      return {
        ...state,
        formLoading: false,
        selectedSnippet: null
      };
    }
    case actions.START_SNIPPETS_LIST_SYNC:
    case actions.START_SELECTED_SNIPPET_SYNC: {
      return {
        ...state,
        loading: true
      };
    }
    case actions.STOP_SNIPPETS_LIST_SYNC:
    case actions.STOP_SELECTED_SNIPPET_SYNC: {
      return {
        ...state,
        loading: false
      }
    }
    default: {
      return state;
    }
  }
}

export default snippetsReducer;