export enum LoadingState {
   NEVER = 'NEVER',
   ERROR = 'ERROR',
   LOADING = 'LOADING',
   LOADED = 'LOADED',
}

export interface Terms {
   id: string;
   question: string;
   answer: string;
   module: {
      id: number | string;
      name: string;
   };
}

export enum AddCardState {
   ERROR = 'ERROR',
   STATIC = 'STATIC',
   LOADING = 'LOADING',
}
