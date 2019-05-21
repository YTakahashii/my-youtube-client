import { all } from "redux-saga/effects";
import { videoSagas } from "./Video/VideoSaga";

export default function* rootSaga() {
  yield all([...videoSagas]);
}
