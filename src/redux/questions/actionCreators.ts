import { Terms } from './ts/state';
import { CardsType, fetchCardsInterface, setCardsInterface, fetchAddCardInterface, addCardInterface } from './ts/actionTypes';

export const fetchCards = (): fetchCardsInterface => ({
   type: CardsType.FETCH_CARDS,
});

export const setCards = (payload: Terms): setCardsInterface => ({
   type: CardsType.SET_CARDS,
   payload,
});

export const fetchAddCard = (payload1: string, payload2: string): fetchAddCardInterface => ({
   type: CardsType.FETCH_ADD_CARD,
   payload1,
   payload2,
});

export const addCard = (payload: Terms): addCardInterface => ({
   type: CardsType.ADD_CARD,
   payload,
});

export type CardsActions = fetchCardsInterface | setCardsInterface | fetchAddCardInterface | addCardInterface;
