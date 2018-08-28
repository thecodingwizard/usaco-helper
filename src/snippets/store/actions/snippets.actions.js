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