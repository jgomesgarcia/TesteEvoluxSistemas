import Axios, { AxiosResponse } from 'axios';
import { call, put, all, takeLatest, delay } from 'redux-saga/effects'
import { LoadPhoneNumberFailure, LoadPhoneNumberSuccess, CleanState  } from './actions';
import { PayloadAction } from 'typesafe-actions';
import { PhoneNumberTypes } from './types';
import PhoneNumberGenerator, { sleep } from '../../../services/PhoneNumberGenerator';



export function* ListAllPhoneNumbers(action: PayloadAction<PhoneNumberTypes.LOAD_PHONENUMBER_REQUEST, number>) {

    try {
        yield delay(2000)
        
        yield put(LoadPhoneNumberSuccess(PhoneNumberGenerator(action.payload)))

    }
    catch (e) {
        yield put(LoadPhoneNumberFailure("An error occurred while trying to get the data."));
    }
}

export function* clean() {
    return true
}

export default function* () {
    yield all([
        takeLatest(PhoneNumberTypes.LOAD_PHONENUMBER_REQUEST, ListAllPhoneNumbers),
        takeLatest(PhoneNumberTypes.CLEAN_STATE, clean),
    ]);
}