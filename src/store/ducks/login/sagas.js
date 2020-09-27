import { call, put } from 'redux-saga/effects';
import { login } from '../../../services/api';

export function *submitLogin({ payload, onSuccess }) {
  const response = yield call(login, payload);
  
  if(response){
    localStorage.setItem('token', response.token);
    localStorage.setItem('refresh-token', response.refreshToken);

    yield call(onSuccess);

    yield put({
      type: 'SET_CURRENT_USER',
      payload: response
    });
  }
}