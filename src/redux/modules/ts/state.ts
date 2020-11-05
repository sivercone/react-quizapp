export interface ModulesInterface {
   id: string;
   name: string;
}

export interface ModulesState {
   items: ModulesInterface;
   addModulesState: AddModuleState;
}

export enum AddModuleState {
   ERROR = 'ERROR',
   STATIC = 'STATIC',
   LOADING = 'LOADING',
}
