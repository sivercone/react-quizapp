import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchAddModuleInterface, FiltersType, removeModuleInterface } from './ts/actionTypes';
import { ModulesInterface } from './ts/state';
import { addModule, removeModuleSuccess } from './actionCreators';
import { ModulesApi } from '../../API/modulesApi';

export function* fetchAddModuleRequest({ payload }: fetchAddModuleInterface) {
   const data: ModulesInterface = {
      id: Math.random().toString(36).substr(2),
      name: payload,
   };
   const item = yield call(ModulesApi.fetchAddModule, data);
   yield put(addModule(item));
}

export function* fetchRemoveModuleRequest({ payload1, payload2 }: removeModuleInterface) {
   yield call(ModulesApi.fetchRemoveModule, payload1);
   yield put(removeModuleSuccess(payload2));
}

export function* modulesSaga() {
   yield takeLatest(FiltersType.FETCH_ADD_MODULE, fetchAddModuleRequest);
   yield takeLatest(FiltersType.REMOVE_MODULE, fetchRemoveModuleRequest);
}
