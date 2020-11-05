import { Action } from 'redux';
import { ModulesInterface } from './state';

export enum FiltersType {
   SET_MODULE = 'SET_MODULE',
   FETCH_ADD_MODULE = 'FETCH_ADD_MODULE',
   ADD_MODULE = 'ADD_MODULE',
   REMOVE_MODULE = 'REMOVE_MODULE',
   REMOVE_MODULE_SUCCESS = 'REMOVE_MODULE_SUCCESS',
}

export interface setModuleInterface extends Action<FiltersType> {
   type: FiltersType.SET_MODULE;
   payload: ModulesInterface;
}

export interface fetchAddModuleInterface extends Action<FiltersType> {
   type: FiltersType.FETCH_ADD_MODULE;
   payload: string;
}

export interface addModuleInterface extends Action<FiltersType> {
   type: FiltersType.ADD_MODULE;
   payload: ModulesInterface;
}

export interface removeModuleInterface extends Action<FiltersType> {
   type: FiltersType.REMOVE_MODULE;
   payload1: string;
   payload2: ModulesInterface;
}

export interface removeModuleSuccessInterface extends Action<FiltersType> {
   type: FiltersType.REMOVE_MODULE_SUCCESS;
   payload: ModulesInterface;
}
