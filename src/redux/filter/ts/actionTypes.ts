import { Action } from 'redux';
import { ModulesInterface } from './state';

export enum FiltersType {
   SET_MODULE = 'SET_MODULE',
}

export interface setModuleInterface extends Action<FiltersType> {
   type: FiltersType.SET_MODULE;
   payload: ModulesInterface;
}
