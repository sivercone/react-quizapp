// prettier-ignore
import {CardsType,fetchCardsInterface,setCardsInterface,fetchAddCardInterface,addCardInterface, removeCardSuccessInterface, removeCardInterface,} from './ts/actionTypes';
import { TermsInterface } from './ts/state';

export const fetchCards = (payload: string): fetchCardsInterface => ({
   type: CardsType.FETCH_CARDS,
   payload,
});

export const setCards = (payload: TermsInterface): setCardsInterface => ({
   type: CardsType.SET_CARDS,
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
   | removeCardSuccessInterface;
