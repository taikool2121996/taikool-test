import {
  requestBaseRequest,
  requestBaseRequestSuccessful,
  requestBaseRequestFailed,
} from './baseRequest.slice';
import { put, takeLatest, call } from 'redux-saga/effects';

export function* requestBaseRequestSaga({ payload }) {
  try {
    const response = yield call(() => fetch('https://restcountries.com/v3.1/all'));
    const responseFormatted = yield response.json()
    yield put(requestBaseRequestSuccessful(responseFormatted));
  } catch (error) {
    console.log('Request failed : ', error);
    yield put(requestBaseRequestFailed(error));
  }
}

export default function* baseRequestSaga() {
  yield takeLatest(requestBaseRequest, requestBaseRequestSaga);
}
