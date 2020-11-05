import axios from 'axios';
import { ModulesInterface } from '../redux/modules/ts/state';

export const ModulesApi = {
   fetchAddModule(payload: ModulesInterface): Promise<ModulesInterface> {
      return axios.post('/modules', payload).then(({ data }) => data);
   },

   fetchRemoveModule(payload: string): Promise<ModulesInterface> {
      return axios.delete(`/modules/${payload}`).then(({ data }) => data);
   },
};
