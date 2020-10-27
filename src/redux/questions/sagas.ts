import { call, put, takeLatest } from 'redux-saga/effects';
import { CardsApi } from '../../cardsApi';
import { setCards, addCard } from './actionCreators';
import { Terms } from './ts/state';
import { CardsType, fetchAddCardInterface, fetchCardsInterface } from './ts/actionTypes';

export function* fetchCardsRequest({ payload }: fetchCardsInterface) {
   const items = yield call(CardsApi.fetchCards, payload);
   yield put(setCards(items));
}

export function* fetchAddCardRequest({ payload1, payload2, moduleId, moduleName }: fetchAddCardInterface) {
   const data: Terms = {
      id: Math.random().toString(36).substr(2),
      question: payload1,
      answer: payload2,
      module: {
         id: moduleId,
         name: moduleName,
      },
   };
   const item = yield call(CardsApi.fetchAddCard, data);
   yield put(addCard(item));
}

export function* cardsSaga() {
   yield takeLatest(CardsType.FETCH_CARDS, fetchCardsRequest);
   yield takeLatest(CardsType.FETCH_ADD_CARD, fetchAddCardRequest);
}
