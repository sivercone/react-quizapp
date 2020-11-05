import { FiltersType } from './ts/actionTypes';
import { FiltersActions } from './actionCreators';
import { AddModuleState } from './ts/state';

const initialState = {
   items: [],
   addModuleState: AddModuleState.STATIC,
};

export const filtersReducer = (state = initialState, action: FiltersActions) => {
   switch (action.type) {
      case FiltersType.SET_MODULE:
         return {
            ...state,
            items: action.payload,
         };

      case FiltersType.FETCH_ADD_MODULE:
         return {
            ...state,
            addModuleState: AddModuleState.LOADING,
         };

      case FiltersType.ADD_MODULE:
         return {
            ...state,
            items: [...state.items, action.payload],
            addModuleState: AddModuleState.STATIC,
         };

      case FiltersType.REMOVE_MODULE_SUCCESS:
         return {
            ...state,
            items: state.items.filter((item) => item !== action.payload),
         };

      default:
         return state;
   }
};
