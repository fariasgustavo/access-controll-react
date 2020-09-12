import { call, put } from 'redux-saga/effects';
import { login } from '../../../services/api';

export function *submittLogin({ payload }) {
  const response = yield call(login, payload);
  
  if(response){
    const { data } = response;

    localStorage.setItem('token', data.token);
    localStorage.setItem('refresh-token', data.refreshToken);

    yield put({
      type: 'SET_CURRENT_USER',
      payload: data
    });
  }
}