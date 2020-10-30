// prettier-ignore
import {CardsType,fetchCardsInterface,setCardsInterface,fetchAddCardInterface,addCardInterface} from './ts/actionTypes';
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
export const fetchAddCard = (payload1: string, payload2: string, moduleId: string | number, moduleName: string,): fetchAddCardInterface => ({
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

export type CardsActions = fetchCardsInterface | setCardsInterface | fetchAddCardInterface | addCardInterface;
