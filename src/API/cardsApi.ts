import axios from 'axios';
import { TermsInterface } from '../redux/cards/ts/state';

export const CardsApi = {
   async fetchCards(payload: Object): Promise<TermsInterface> {
      const { data } = await axios.get(`/terms?module.${payload !== '0' ? `id=${payload}` : ''}`);
      return data;
   },

   async fetchAddCard(payload: TermsInterface): Promise<TermsInterface> {
      const { data } = await axios.post('/terms', payload);
      return data;
   },

   async fetchRemoveCard(payload: string): Promise<TermsInterface> {
      const { data } = await axios.delete(`/terms/${payload}`);
      return data;
   },
};
