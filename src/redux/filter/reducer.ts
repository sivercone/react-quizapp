import { FiltersType } from './ts/actionTypes';
import { FiltersActions } from './actionCreators';

const initialState = {
   module: {
      id: 0,
      name: '',
   },
};

export const filtersReducer = (state = initialState, action: FiltersActions) => {
   switch (action.type) {
      case FiltersType.SET_MODULE:
         return {
            ...state,
            module: action.payload,
         };

      default:
         return state;
   }
};
