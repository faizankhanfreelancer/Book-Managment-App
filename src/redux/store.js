import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './sagas/rootSaga';
import createSagaMiddleware from 'redux-saga';
import bookReducer from './reducers/bookReducer';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;