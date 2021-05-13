import IPhoneNumber from "../../../interfaces/IPhoneNumber";


export enum PhoneNumberTypes {
    LOAD_PHONENUMBER_REQUEST = "@PhoneNumber/LOAD_PHONENUMBER_REQUEST",
    LOAD_PHONENUMBER_SUCCESS = "@PhoneNumber/LOAD_PHONENUMBER_SUCCESS",
    LOAD_PHONENUMBER_FAILURE = "@PhoneNumber/LOAD_PHONENUMBER_FAILURE",

    
    CLEAN_STATE = "@PhoneNumber/CLEAN_ATTEMPTS"
}

export interface IPhoneNumberState{
    readonly ListPhoneNumber: IPhoneNumber[],
    readonly ListPhoneNumberLoading: boolean,
    readonly ListPhoneNumberError: any,
}
