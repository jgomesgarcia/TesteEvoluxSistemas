import axios from 'axios';

export const PhoneNumber = axios.create({
    baseURL:"https://phone-number/api",
    headers:{
        Authorization:  `token`
    }
});

export const Endpoints = {
    GetPhoneNumberList: "/PhoneNumber",
};
