import styled from 'styled-components'

export const Container = styled.div<{diametro:number; disabled?: boolean}>`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    width: ${props => props.diametro}px;
    height: ${props => props.diametro}px;
    border-radius: 50% ;
    border: 1px solid  ${ props => props?.disabled ? "#EEE" : "#aaa"};
    background-color: white;
    color :${ props => props?.disabled ? "#EEE" : "initial"};
    box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
    cursor: pointer;
    &:hover{
        background-color: ${ props => props?.disabled ? "#white" : "#EEE"};
    }
    &:active{
        background-color: ${ props => props?.disabled ? "#white" : "#CCC"};
    }
`;
