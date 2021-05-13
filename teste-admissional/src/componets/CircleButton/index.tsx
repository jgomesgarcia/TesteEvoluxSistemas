import React from 'react'
import { Container } from './styles'
import IProps from './types'


const CircleButton: React.FC<IProps> = (props): React.ReactElement => {
    return (
        <Container diametro={props.diametro} disabled={props?.disabled} onClick={props?.disabled ? undefined : props.onClick}>
            {props?.children}
        </Container>
    )
}

export default CircleButton