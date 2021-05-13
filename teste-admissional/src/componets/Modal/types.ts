import { CSSProperties } from "styled-components";

export interface IModalProps {
    content?: string | React.ReactNode,
    cancelContent?:string | React.ReactNode,
    submitContent?: string | React.ReactNode,
    headerContent?: string | React.ReactNode,
    footerContent?: string | React.ReactNode,
    width?: string,
    height?: string,
    maxWidth?: string,
    maxHeight?: string,
    isActive?: boolean,
    hasSubmit?: boolean,
    hasCancel?: boolean,
    styles?: IModalStylesProps,
    disableSubmit?: boolean,
    disableCancel?: boolean,
    
    onClose?: (event?: React.MouseEvent<HTMLDivElement | HTMLSpanElement | HTMLAnchorElement | HTMLButtonElement | MouseEvent> | any) => any,
    onSubmit?: (event: React.MouseEvent<HTMLDivElement | HTMLSpanElement | HTMLAnchorElement | HTMLButtonElement | MouseEvent>) => any,
    onCancel?: (event: React.MouseEvent<HTMLDivElement | HTMLSpanElement | HTMLAnchorElement | HTMLButtonElement | MouseEvent>) => any,

}

export interface IModalStylesProps{
    Submit?: CSSProperties,
    Cancel?: CSSProperties,
    Container?: CSSProperties,
}