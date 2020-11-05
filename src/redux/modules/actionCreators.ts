import {
   setModuleInterface,
   FiltersType,
   fetchAddModuleInterface,
   addModuleInterface,
   removeModuleInterface,
   removeModuleSuccessInterface,
} from './ts/actionTypes';
import { ModulesInterface } from './ts/state';

export const setModule = (payload: ModulesInterface): setModuleInterface => ({
   type: FiltersType.SET_MODULE,
   payload,
});

export const fetchAddModule = (payload: string): fetchAddModuleInterface => ({
   type: FiltersType.FETCH_ADD_MODULE,
   payload,
});

export const addModule = (payload: ModulesInterface): addModuleInterface => ({
   type: FiltersType.ADD_MODULE,
   payload,
});

export const removeModule = (payload1: string, payload2: ModulesInterface): removeModuleInterface => ({
   type: FiltersType.REMOVE_MODULE,
   payload1,
   payload2,
});

export const removeModuleSuccess = (payload: ModulesInterface): removeModuleSuccessInterface => ({
   type: FiltersType.REMOVE_MODULE_SUCCESS,
   payload,
});

export type FiltersActions = setModuleInterface | fetchAddModuleInterface | addModuleInterface | removeModuleSuccessInterface;
