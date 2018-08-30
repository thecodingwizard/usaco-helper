export const SYNC_SNIPPETS_LIST = "[Snippets] Sync Snippets List";
export const START_SNIPPETS_LIST_SYNC = "[Snippets] Start Snippets List Sync";
export const STOP_SNIPPETS_LIST_SYNC = "[Snippets] Stop Snippets List Sync";

export const syncSnippetsList = snippets => ({
  type: SYNC_SNIPPETS_LIST,
  payload: snippets
});

export const startSnippetsListSync = () => ({
  type: START_SNIPPETS_LIST_SYNC
});

export const stopSnippetsListSync = () => ({
  type: STOP_SNIPPETS_LIST_SYNC
});

export const SYNC_SELECTED_SNIPPET = "[Snippets] Sync Selected Snippet";
export const START_SELECTED_SNIPPET_SYNC = "[Snippets] Start Selected Snippet Sync";
export const STOP_SELECTED_SNIPPET_SYNC = "[Snippets] Stop Selected Snippet Sync";

export const syncSelectedSnippet = snippet => ({
  type: SYNC_SELECTED_SNIPPET,
  payload: snippet
});

export const startSelectedSnippetSync = snippetId => ({
  type: START_SELECTED_SNIPPET_SYNC,
  payload: snippetId
});

export const stopSelectedSnippetSync = () => ({
  type: STOP_SELECTED_SNIPPET_SYNC
});

export const CREATE_NEW_SNIPPET = "[Snippets] Create New Snippet";
export const CREATE_NEW_SNIPPET_SUCCESS = "[Snippets] Create New Snippet Success";

export const createNewSnippet = snippet => ({
  type: CREATE_NEW_SNIPPET,
  payload: snippet
});

export const createNewSnippetSuccess = snippet => ({
  type: CREATE_NEW_SNIPPET_SUCCESS,
  payload: snippet
});

export const UPDATE_SNIPPET = "[Snippets] Update Snippet";
export const UPDATE_SNIPPET_SUCCESS = "[Snippets] Update Snippet Success";

export const updateSnippet = (id, data) => ({
  type: UPDATE_SNIPPET,
  payload: { id, data }
});

export const updateSnippetSuccess = snippet => ({
  type: UPDATE_SNIPPET_SUCCESS,
  payload: snippet
});

export const DELETE_SNIPPET = "[Snippets] Delete Snippet"
export const DELETE_SNIPPET_SUCCESS = "[Snippets] Delete Snippet Success";

export const deleteSnippet = id => ({
  type: DELETE_SNIPPET,
  payload: id
});

export const deleteSnippetSuccess = id => ({
  type: DELETE_SNIPPET_SUCCESS,
  payload: id
});