import { Action } from 'redux';

export enum FiltersType {
   SET_MODULE = 'SET_MODULE',
}

export interface setModuleInterface extends Action<FiltersType> {
   type: FiltersType.SET_MODULE;
   payload: any;
}
