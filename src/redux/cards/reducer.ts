import { LoadingState, AddCardState } from './ts/state';
import { CardsType } from './ts/actionTypes';
import { CardsActions } from './actionCreators';

const initialState = {
   items: [],
   loadingState: LoadingState.NEVER,
   addCardState: AddCardState.STATIC,
};

export const questionsReducer = (state = initialState, action: CardsActions) => {
   switch (action.type) {
      case CardsType.SET_LOADING_STATE:
         return {
            ...state,
            loadingState: action.payload,
         };

      case CardsType.FETCH_CARDS:
         return {
            ...state,
            loadingState: LoadingState.LOADING,
         };

      case CardsType.SET_CARDS:
         return {
            ...state,
            items: action.payload,
            loadingState: LoadingState.LOADED,
         };

      case CardsType.CARDS_STATE_CRUD:
         return {
            ...state,
            addCardState: action.payload,
         };

      case CardsType.FETCH_ADD_CARD:
         return {
            ...state,
            addCardState: AddCardState.LOADING,
         };

      case CardsType.ADD_CARD:
         return {
            ...state,
            items: [...state.items, action.payload],
            addCardState: AddCardState.STATIC,
         };

      case CardsType.REMOVE_CARD_SUCCESS:
         return {
            ...state,
            items: state.items.filter((item) => item !== action.payload),
         };

      default:
         return state;
   }
};
