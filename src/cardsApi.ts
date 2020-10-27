import axios from 'axios';
import { Terms } from './redux/questions/ts/state';

export const CardsApi = {
   fetchCards(payload: any): Promise<Terms> {
      return axios.get(`/terms?module.${payload !== 0 ? `id=${payload}` : ''}`).then(({ data }) => data);
   },

   fetchAddCard(payload: Terms): Promise<Terms> {
      return axios.post('/terms', payload).then(({ data }) => data);
   },
};
