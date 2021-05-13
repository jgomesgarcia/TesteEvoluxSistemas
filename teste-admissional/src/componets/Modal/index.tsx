import { Icon } from 'office-ui-fabric-react';
import React from 'react';
import { ButtonsContainer, Cancel, Submit } from './styles';
import { Background, Container, Header, Body, Footer } from './styles';
import { IModalProps } from './types';

const Modal: React.FC<IModalProps> = (props): React.ReactElement => {

    return (
        <Background>
            <Container width={props.width ?? "max-content"} height={props.height ?? "max-content"}  maxWidth={props.maxWidth ?? "100%"} maxHeight={props.maxHeight ?? "100%"}>
                <Header>
                    <div></div>
                    <Icon iconName="Cancel" onClick={props.onClose} />
                </Header>

                <Body>
                    {props?.children ?? props.content}
                </Body>

                <Footer>
                    <ButtonsContainer>
                        {props?.hasCancel && <Cancel style={props?.styles?.Submit} onClick={props?.onCancel} disabled={props?.disableCancel}>{props?.cancelContent ?? "Cancelar"}</Cancel>}
                        {props?.hasSubmit && <Submit style={props?.styles?.Cancel} onClick={props?.onSubmit} disabled={props?.disableSubmit}>{props?.submitContent ?? "Confirmar"}</Submit>}

                    </ButtonsContainer>
                </Footer>
            </Container>
        </Background>
    )
}

export default Modal