import { all } from 'redux-saga/effects';
import 'bootstrap/dist/css/bootstrap.min.css';

import bookSaga from './bookSaga';

export default function* rootSaga() {
  yield all([bookSaga()]);
}