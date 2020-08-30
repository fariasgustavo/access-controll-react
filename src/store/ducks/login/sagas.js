import { call, put } from 'redux-saga/effects';
import { login } from '../../../services/api';

export function *submittLogin({ payload }) {
  const response = yield call(login, payload);
  
  if(response)
    yield put({
      type: 'SET_CURRENT_USER',
      payload: response
    });
}