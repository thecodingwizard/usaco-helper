import { all, fork, take, cancel, call, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";

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

function* createNewSnippet(action) {
  const doc = yield call(
    rsf.firestore.addDocument,
    "snippets",
    action.payload
  );
  yield put(actions.createNewSnippetSuccess(doc));
  yield put(push(`/snippets/${doc.id}`));
}

function* updateSnippet(action) {
  yield call(
    rsf.firestore.updateDocument,
    `snippets/${action.payload.id}`,
    action.payload.data
  );
  yield put(actions.updateSnippetSuccess({
    id: action.payload.id,
    ...action.payload.data
  }));
  yield put(push(`/snippets/${action.payload.id}`));
}

function* deleteSnippet(action) {
  yield call(
    rsf.firestore.deleteDocument,
    `snippets/${action.payload}`
  );
  yield put(actions.deleteSnippetSuccess(action.payload));
  yield put(push("/snippets"));
}

export default function* snippetsSaga() {
  yield all([
    fork(syncSnippetsListSaga),
    fork(syncSelectedSnippetSaga),
    takeLatest(actions.CREATE_NEW_SNIPPET, createNewSnippet),
    takeLatest(actions.UPDATE_SNIPPET, updateSnippet),
    takeLatest(actions.DELETE_SNIPPET, deleteSnippet)
  ]);
}