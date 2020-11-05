import { all } from 'redux-saga/effects';
import { cardsSaga } from './cards/sagas';
import { modulesSaga } from './modules/sagas';

export function* rootSaga() {
   yield all([cardsSaga(), modulesSaga()]);
}
