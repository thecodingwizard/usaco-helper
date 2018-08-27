import { all, fork, take, cancel } from "redux-saga/effects";

import * as actions from "../actions";

import rsf from "../../../store/rsf";

const snippetsTransformer = snippets => {
  const res = [];
  snippets.forEach(doc => res.push({
    id: doc.id,
    ...doc.data()
  }));
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

export default function* snippetsSaga() {
  yield all([
    fork(syncSnippetsListSaga)
  ]);
}