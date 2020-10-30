import { Action } from 'redux';
import { TermsInterface } from './state';

export enum CardsType {
   FETCH_CARDS = 'FETCH_CARDS',
   SET_CARDS = 'SET_CARDS',
   FETCH_ADD_CARD = 'FETCH_ADD_CARD',
   ADD_CARD = 'ADD_CARD',
}

export interface fetchCardsInterface extends Action<CardsType> {
   type: CardsType.FETCH_CARDS;
   payload: string;
}

export interface setCardsInterface extends Action<CardsType> {
   type: CardsType.SET_CARDS;
   payload: TermsInterface;
}

export interface fetchAddCardInterface extends Action<CardsType> {
   type: CardsType.FETCH_ADD_CARD;
   payload1: string;
   payload2: string;
   moduleId: string | number;
   moduleName: string;
}

export interface addCardInterface extends Action<CardsType> {
   type: CardsType.ADD_CARD;
   payload: TermsInterface;
}
