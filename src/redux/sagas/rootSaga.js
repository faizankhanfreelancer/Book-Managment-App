// D:/book-management-app (2)/src/redux/sagas/rootSaga.js

import { all } from 'redux-saga/effects';
import bookSaga from './bookSaga';

export default function* rootSaga() {
  yield all([
    bookSaga(),
  ]);
}
