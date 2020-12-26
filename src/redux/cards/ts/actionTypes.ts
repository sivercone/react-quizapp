import { Action } from 'redux';
import { TermsInterface, LoadingState, AddCardState } from './state';

export enum CardsType {
   FETCH_CARDS = 'FETCH_CARDS',
   SET_CARDS = 'SET_CARDS',
   FETCH_ADD_CARD = 'FETCH_ADD_CARD',
   ADD_CARD = 'ADD_CARD',
   REMOVE_CARD = 'REMOVE_CARD',
   REMOVE_CARD_SUCCESS = 'REMOVE_CARD_SUCCESS',
   SET_LOADING_STATE = 'SET_LOADING_STATE',
   CARDS_STATE_CRUD = 'CARDS_STATE_CRUD',
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
   moduleId: string;
   moduleName: string;
}

export interface addCardInterface extends Action<CardsType> {
   type: CardsType.ADD_CARD;
   payload: TermsInterface;
}

export interface removeCardInterface extends Action<CardsType> {
   type: CardsType.REMOVE_CARD;
   payload1: string;
   payload2: TermsInterface;
}

export interface removeCardSuccessInterface extends Action<CardsType> {
   type: CardsType.REMOVE_CARD_SUCCESS;
   payload: TermsInterface;
}

export interface setLoadingStateInterface extends Action<CardsType> {
   type: CardsType.SET_LOADING_STATE;
   payload: LoadingState;
}

export interface cardsStateCRUDInterface extends Action<CardsType> {
   type: CardsType.CARDS_STATE_CRUD;
   payload: AddCardState;
}
