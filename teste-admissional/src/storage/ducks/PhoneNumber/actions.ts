import { action } from 'typesafe-actions';
import IPhoneNumber from '../../../interfaces/IPhoneNumber';
import { PhoneNumberTypes } from './types';

export const LoadPhoneNumberRequest = (count: number) => action(PhoneNumberTypes.LOAD_PHONENUMBER_REQUEST, count);
export const LoadPhoneNumberSuccess = (response: IPhoneNumber[]) => action( PhoneNumberTypes.LOAD_PHONENUMBER_SUCCESS, response);
export const LoadPhoneNumberFailure = (err: any) => action( PhoneNumberTypes.LOAD_PHONENUMBER_FAILURE, err);

export const CleanState = () => action(PhoneNumberTypes.CLEAN_STATE);


