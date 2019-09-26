import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleare = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(
        console.tron.createEnhancer(),
        applyMiddleware(sagaMiddleare)
      )
    : applyMiddleware(sagaMiddleare);

const store = createStore(rootReducer, enhancer);

sagaMiddleare.run(rootSaga);

export default store;
