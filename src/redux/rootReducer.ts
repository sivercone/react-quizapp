import { combineReducers } from 'redux';
import { questionsReducer } from './cards/reducer';
import { filtersReducer } from './modules/reducer';

export const rootReducer = combineReducers({
   questions: questionsReducer,
   filters: filtersReducer,
});
