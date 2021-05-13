export default interface IPhoneNumber{
    id: number,
    value: string,
    monthyPrice: number,
    setupPrice: number,
    currency: string,
    active: boolean,
    idClient: number | undefined
}