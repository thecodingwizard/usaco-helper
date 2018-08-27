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