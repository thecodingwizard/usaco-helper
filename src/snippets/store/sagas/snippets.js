import { all, fork, take, cancel } from "redux-saga/effects";

import * as actions from "../actions";

import rsf from "../../../store/rsf";

const snippetTransformer = doc => {
  return {
    id: doc.id,
    ...doc.data()
  };
}

const snippetsTransformer = snippets => {
  const res = [];
  snippets.forEach(doc => res.push(snippetTransformer(doc)));
  return res;
};

function* syncSnippetsListSaga() {
  while (true) {
    yield take(actions.START_SNIPPETS_LIST_SYNC);

    let task = yield fork(
      rsf.firestore.syncCollection,
      "snippets",
      {
        successActionCreator: actions.syncSnippetsList,
        transform: snippetsTransformer
      }
    );

    yield take(actions.STOP_SNIPPETS_LIST_SYNC);
    yield cancel(task);
  }
}

function* syncSelectedSnippetSaga() {
  while (true) {
    const action = yield take(actions.START_SELECTED_SNIPPET_SYNC);

    let task = yield fork(
      rsf.firestore.syncDocument,
      `snippets/${action.payload}`,
      {
        successActionCreator: actions.syncSelectedSnippet,
        transform: snippetTransformer
      }
    );
    
    yield take(actions.STOP_SELECTED_SNIPPET_SYNC);
    yield cancel(task);
  }
}

export default function* snippetsSaga() {
  yield all([
    fork(syncSnippetsListSaga),
    fork(syncSelectedSnippetSaga)
  ]);
}