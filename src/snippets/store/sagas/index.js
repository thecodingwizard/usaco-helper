import { all, fork } from "redux-saga/effects";

import snippets from "./snippets";

export default function* rootSaga() {
  yield all([
    fork(snippets)
  ]);
}