import { fork } from 'redux-saga/effects';
// add saga here
import baseRequestSaga from './reducers/baseRequest/baseRequest.saga';
import aRequestSaga from './reducers/aRequest/aRequest.saga';

export default function* rootSaga() {
  yield fork(baseRequestSaga);
  yield fork(aRequestSaga);
}
