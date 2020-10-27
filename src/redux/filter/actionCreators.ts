import { setModuleInterface, FiltersType } from './ts/actionTypes';

export const setModule = (payload: any): setModuleInterface => ({
   type: FiltersType.SET_MODULE,
   payload,
});

export type FiltersActions = setModuleInterface;
