import {
  requestARequest,
  requestARequestSuccessful,
  requestARequestFailed,
} from './aRequest.slice';
import { put, takeLatest, call } from 'redux-saga/effects';

export function* requestARequestSaga({ payload }) {
  try {
    const response = yield call(() => fetch('https://'));
    const responseFormatted = yield response.json()
    yield put(requestARequestSuccessful(responseFormatted));
  } catch (error) {
    console.log('Request failed : ', error);
    yield put(requestARequestFailed(error));
  }
}

export default function* aRequestSaga() {
  yield takeLatest(requestARequest, requestARequestSaga);
}
