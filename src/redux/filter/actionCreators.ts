import { setModuleInterface, FiltersType } from './ts/actionTypes';
import { ModulesInterface } from './ts/state';

export const setModule = (payload: ModulesInterface): setModuleInterface => ({
   type: FiltersType.SET_MODULE,
   payload,
});

export type FiltersActions = setModuleInterface;
