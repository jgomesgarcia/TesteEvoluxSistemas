import { useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import { EnumType } from 'typescript';

import PhoneNumber from './PhoneNumber';

import { IPhoneNumberState } from './PhoneNumber/types';

export interface IReduxStateObject<DataType, ErroType> {
    data: DataType;
    loading: boolean;
    error: ErroType
}

export interface ApplicationState {
    PhoneNumber: IPhoneNumberState,
}

export interface IAction<IPayload> {
    type: string;
    payload: IPayload;
}

export default combineReducers({
    PhoneNumber,
});

export const useTypedSelector = <T>(
    selector: (store: ApplicationState) => T,
    qualityFn?: (left: T, right: T) => boolean
    ) => useSelector<ApplicationState, T>(selector, qualityFn);

