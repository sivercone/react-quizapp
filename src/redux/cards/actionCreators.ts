// prettier-ignore
import {CardsType,fetchCardsInterface,setCardsInterface,fetchAddCardInterface,addCardInterface, removeCardSuccessInterface, removeCardInterface, setLoadingStateInterface, cardsStateCRUDInterface,} from './ts/actionTypes';
import { TermsInterface, LoadingState, AddCardState } from './ts/state';

export const setLoadingState = (payload: LoadingState): setLoadingStateInterface => ({
   type: CardsType.SET_LOADING_STATE,
   payload,
});

export const fetchCards = (payload: string): fetchCardsInterface => ({
   type: CardsType.FETCH_CARDS,
   payload,
});

export const setCards = (payload: TermsInterface): setCardsInterface => ({
   type: CardsType.SET_CARDS,
   payload,
});

export const cardsStateCRUD = (payload: AddCardState): cardsStateCRUDInterface => ({
   type: CardsType.CARDS_STATE_CRUD,
   payload,
});

// prettier-ignore
export const fetchAddCard = (payload1: string, payload2: string, moduleId: string, moduleName: string,): fetchAddCardInterface => ({
   type: CardsType.FETCH_ADD_CARD,
   payload1,
   payload2,
   moduleId,
   moduleName,
});

export const addCard = (payload: TermsInterface): addCardInterface => ({
   type: CardsType.ADD_CARD,
   payload,
});

export const removeCard = (payload1: string, payload2: TermsInterface): removeCardInterface => ({
   type: CardsType.REMOVE_CARD,
   payload1,
   payload2,
});

export const removeCardSuccess = (payload: TermsInterface): removeCardSuccessInterface => ({
   type: CardsType.REMOVE_CARD_SUCCESS,
   payload,
});

export type CardsActions =
   | fetchCardsInterface
   | setCardsInterface
   | fetchAddCardInterface
   | addCardInterface
   | removeCardSuccessInterface
   | setLoadingStateInterface
   | cardsStateCRUDInterface;
