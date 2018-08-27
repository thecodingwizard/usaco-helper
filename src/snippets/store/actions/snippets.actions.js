export const SYNC_SNIPPETS_LIST = "[Snippets] Sync Snippets List";

export const syncSnippetsList = snippets => ({
  type: SYNC_SNIPPETS_LIST,
  payload: snippets
});