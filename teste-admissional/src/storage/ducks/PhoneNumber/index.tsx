import { Reducer } from 'redux';
import { PhoneNumberTypes, IPhoneNumberState } from './types';

const INITIAL_STATE:  IPhoneNumberState = {
    ListPhoneNumber: [],
    ListPhoneNumberLoading: false,
    ListPhoneNumberError: null,
}

const reducer: Reducer<IPhoneNumberState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case PhoneNumberTypes.LOAD_PHONENUMBER_REQUEST:
            return { ...state, ListPhoneNumberLoading: true, ListPhoneNumberError: null, ListPhoneNumber: [] };

        case PhoneNumberTypes.LOAD_PHONENUMBER_SUCCESS:
            return { ...state, ListPhoneNumberLoading: false, ListPhoneNumberError: null, ListPhoneNumber: action.payload };

        case PhoneNumberTypes.LOAD_PHONENUMBER_FAILURE:
            return { ...state, ListPhoneNumberLoading: false, ListPhoneNumberError: action.payload, ListPhoneNumber: [] };

        case PhoneNumberTypes.CLEAN_STATE:
            return {
                ...INITIAL_STATE
            };

        default:
            return state;
    }
}

export default reducer;