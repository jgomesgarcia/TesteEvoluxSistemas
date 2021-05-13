import { MouseEventHandler } from "react";


export default interface IProps{
    diametro: number;
    onClick?: MouseEventHandler;
    disabled? : boolean
}