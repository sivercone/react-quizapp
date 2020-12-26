import { call, put, takeLatest } from 'redux-saga/effects';
import { CardsApi } from '../../API/cardsApi';
import { setCards, addCard, removeCardSuccess, setLoadingState, cardsStateCRUD } from './actionCreators';
import { CardsType, fetchAddCardInterface, fetchCardsInterface, removeCardInterface } from './ts/actionTypes';
import { TermsInterface, LoadingState, AddCardState } from './ts/state';

export function* fetchCardsRequest({ payload }: fetchCardsInterface) {
   try {
      const items = yield call(CardsApi.fetchCards, payload);
      yield put(setCards(items));
   } catch (error) {
      yield put(setLoadingState(LoadingState.ERROR));
   }
}

export function* fetchAddCardRequest({ payload1, payload2, moduleId, moduleName }: fetchAddCardInterface) {
   try {
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
   } catch (error) {
      yield put(cardsStateCRUD(AddCardState.ERROR));
   }
}

export function* fetchRemoveCardRequest({ payload1, payload2 }: removeCardInterface) {
   try {
      yield call(CardsApi.fetchRemoveCard, payload1);
      yield put(removeCardSuccess(payload2));
   } catch (error) {
      yield put(cardsStateCRUD(AddCardState.ERROR));
   }
}

export function* cardsSaga() {
   yield takeLatest(CardsType.FETCH_CARDS, fetchCardsRequest);
   yield takeLatest(CardsType.FETCH_ADD_CARD, fetchAddCardRequest);
   yield takeLatest(CardsType.REMOVE_CARD, fetchRemoveCardRequest);
}
