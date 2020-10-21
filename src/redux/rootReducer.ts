import { combineReducers } from 'redux';
import { questionsReducer } from './questions/reducer';

export const rootReducer = combineReducers({
   questions: questionsReducer,
});
