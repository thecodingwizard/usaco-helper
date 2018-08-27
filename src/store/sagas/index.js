import { all, fork } from "redux-saga/effects";

import snippets from "../../snippets/store/sagas";

export default function* rootSaga() {
  yield all([
    fork(snippets)
  ]);
}