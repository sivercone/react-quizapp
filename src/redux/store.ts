import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
// import rootSaga from './saga';
import { cardsSaga } from './questions/sagas';
import { TermsState } from './questions/ts/state';
import { ModulesState } from './filter/ts/state';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
   questions: TermsState;
   filters: ModulesState;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(cardsSaga);
