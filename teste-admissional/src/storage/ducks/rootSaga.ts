import { all } from 'redux-saga/effects';

import PhoneNumber from './PhoneNumber/saga'; 

export default function* rootSaga(): any {
    return yield all([
        PhoneNumber(),
    ]);
}