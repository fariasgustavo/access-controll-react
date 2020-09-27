import { call, put } from 'redux-saga/effects';
import { getUsers } from '../../../services/api';

export function *fetchUsers({ payload }) {
  const response = yield call(getUsers, payload);
}