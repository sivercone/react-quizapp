import { all } from 'redux-saga/effects';
import { cardsSaga } from './questions/sagas';

export default function* rootSaga() {
   yield all([cardsSaga]);
}
