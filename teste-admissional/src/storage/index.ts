import { createStore, Store, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer, { ApplicationState } from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);
middlewares.push(logger);

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;