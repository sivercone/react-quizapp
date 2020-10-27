import { combineReducers } from 'redux';
import { questionsReducer } from './questions/reducer';
import { filtersReducer } from './filter/reducer';

export const rootReducer = combineReducers({
   questions: questionsReducer,
   filters: filtersReducer,
});
