export const actions = {
  SNIPPET_LIST: {
    GET: "[Snippets] Get Snippet List"
  }
}

export const getSnippetList = () => ({
  type: actions.SNIPPET_LIST.GET
});