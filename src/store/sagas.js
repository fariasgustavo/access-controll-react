import { all, takeLatest } from 'redux-saga/effects';
import { submittLogin } from './ducks/login/sagas';

export default function* root(){
    yield all([
        takeLatest('LOGIN', submittLogin),
    ]);
}