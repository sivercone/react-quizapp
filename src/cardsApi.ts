import axios from 'axios';
import { Terms } from './redux/questions/ts/state';

export const CardsApi = {
   fetchCards(): Promise<Terms> {
      return axios.get('/terms').then(({ data }) => data);
   },

   fetchAddCard(payload: Terms): Promise<Terms> {
      return axios.post('/terms', payload).then(({ data }) => data);
   },
};
