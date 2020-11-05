import { call, put, takeLatest } from 'redux-saga/effects';
import { CardsApi } from '../../API/cardsApi';
import { setCards, addCard, removeCardSuccess } from './actionCreators';
import { CardsType, fetchAddCardInterface, fetchCardsInterface, removeCardInterface } from './ts/actionTypes';
import { TermsInterface } from './ts/state';

export function* fetchCardsRequest({ payload }: fetchCardsInterface) {
   const items = yield call(CardsApi.fetchCards, payload);
   yield put(setCards(items));
}

export function* fetchAddCardRequest({ payload1, payload2, moduleId, moduleName }: fetchAddCardInterface) {
   const data: TermsInterface = {
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

export function* fetchRemoveCardRequest({ payload1, payload2 }: removeCardInterface) {
   yield call(CardsApi.fetchRemoveCard, payload1);
   yield put(removeCardSuccess(payload2));
}

export function* cardsSaga() {
   yield takeLatest(CardsType.FETCH_CARDS, fetchCardsRequest);
   yield takeLatest(CardsType.FETCH_ADD_CARD, fetchAddCardRequest);
   yield takeLatest(CardsType.REMOVE_CARD, fetchRemoveCardRequest);
}
