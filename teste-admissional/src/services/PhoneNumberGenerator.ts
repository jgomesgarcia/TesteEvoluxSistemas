import IPhoneNumber from "../interfaces/IPhoneNumber";

const  getRndNumber = (min: number, max: number, fractionDigits: number) => ((Math.random() * (max - min) ) + min).toFixed(fractionDigits)
export const  PhoneNumberGenerator = (count: number): IPhoneNumber[] => Array(count).fill('').map<IPhoneNumber>( (e, i) => ({
    id: i,
    active: !!Number(getRndNumber(0,2,0)),
    currency: "R$",
    idClient: undefined,
    monthyPrice: Number(getRndNumber(1,10,2)),
    setupPrice: Number(getRndNumber(10,30,2)),
    value: `+55 ${getRndNumber(10,100, 0)} 9${getRndNumber(1000,10000,0)}-${getRndNumber(1000,10000,0)}`

}))

export default PhoneNumberGenerator


export function sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
} 