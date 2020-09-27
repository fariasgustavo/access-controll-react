import { all, takeLatest } from 'redux-saga/effects';
import { submitLogin } from './ducks/login/sagas';
import { fetchUsers } from './ducks/users/sagas';

export default function* root(){
    yield all([
        takeLatest('SUBMIT_LOGIN', submitLogin),
        takeLatest('FETCH_USERS', fetchUsers),
    ]);
}