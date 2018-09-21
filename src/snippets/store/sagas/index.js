import { all, fork } from "redux-saga/effects";

import snippets from "./snippets.saga";

export default function* rootSaga() {
  yield all([
    fork(snippets)
  ]);
}