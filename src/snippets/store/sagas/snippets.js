import { all, fork } from "redux-saga/effects";

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
  yield fork(
    rsf.firestore.syncCollection,
    "snippets",
    {
      successActionCreator: actions.syncSnippetsList,
      transform: snippetsTransformer
    }
  );
}

export default function* snippetsSaga() {
  yield all([
    fork(syncSnippetsListSaga)
  ]);
}