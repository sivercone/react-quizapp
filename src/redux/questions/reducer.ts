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
      // case CardsType.FETCH_CARDS:
      //    return {
      //       items: [],
      //       loadingState: LoadingState.LOADING,
      //    };

      case CardsType.SET_CARDS:
         return {
            items: action.payload,
            loadingState: LoadingState.LOADED,
         };

      case CardsType.FETCH_ADD_CARD:
         return {
            addCardState: AddCardState.LOADING,
         };

      case CardsType.ADD_CARD:
         return {
            items: [...state.items, action.payload],
            addCardState: AddCardState.STATIC,
         };

      default:
         return state;
   }
};
