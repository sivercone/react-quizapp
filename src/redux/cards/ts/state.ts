export enum LoadingState {
   NEVER = 'NEVER',
   ERROR = 'ERROR',
   LOADING = 'LOADING',
   LOADED = 'LOADED',
}

export interface TermsInterface {
   id: string;
   question: string;
   answer: string;
   module: {
      id: number | string;
      name: string;
   };
}

export interface TermsState {
   items: TermsInterface[];
   loadingState: LoadingState;
   addCardState: AddCardState;
}

export enum AddCardState {
   ERROR = 'ERROR',
   STATIC = 'STATIC',
   LOADING = 'LOADING',
}
