import axios from 'axios';
import { TermsInterface } from '../redux/cards/ts/state';

export const CardsApi = {
   fetchCards(payload: Object): Promise<TermsInterface> {
      return axios.get(`/terms?module.${payload !== '0' ? `id=${payload}` : ''}`).then(({ data }) => data);
   },

   fetchAddCard(payload: TermsInterface): Promise<TermsInterface> {
      return axios.post('/terms', payload).then(({ data }) => data);
   },

   fetchRemoveCard(payload: string): Promise<TermsInterface> {
      return axios.delete(`/terms/${payload}`).then(({ data }) => data);
   },
};
