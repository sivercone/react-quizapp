import axios from 'axios';
import { TermsInterface } from './redux/questions/ts/state';

export const CardsApi = {
   fetchCards(payload: any): Promise<TermsInterface> {
      return axios.get(`/terms?module.${payload !== '0' ? `id=${payload}` : ''}`).then(({ data }) => data);
   },

   fetchAddCard(payload: TermsInterface): Promise<TermsInterface> {
      return axios.post('/terms', payload).then(({ data }) => data);
   },
};
