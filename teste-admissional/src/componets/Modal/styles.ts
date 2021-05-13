import styled from 'styled-components';

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    padding:25px;
    background-color: #0101017F;
    z-index: 1;
    animation:opac 0.4s;

    @keyframes opac{from{opacity:0} to{opacity:1}}
`

export const Container = styled.div<{ width?: string, height?: string, maxWidth?: string, maxHeight?: string }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: ${props => props?.width};
    height: ${props => props?.height};
    max-width: ${props => props?.maxWidth};
    max-height: ${props => props?.maxHeight};
    background-color: white;
    padding: 10px;
    animation:animatetop 0.4s;
    position: relative;
    @keyframes animatetop{
        from{top:-300px;opacity:0} 
        to{top:0;opacity:1}
    }
`

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    & > div{
        width: auto
    }

    & > i { 
        font-size: 20;
        color: #0078d4; 
        cursor: pointer
    }

    & > i:hover{
        color: #707070; 
    }
`

export const Body = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: #707070;
    text-align: center;
    overflow-y: auto;
`

export const Footer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Submit = styled.button`
    color: white;
    border : 1px solid #0078d4;
    background-color: #0078d4;
    width: max-content;
    padding: 5px 10px;
    &:focus{
        outline: none;
    }
    &:hover{
        border: 1.5px solid #707070
    }
    &:active{
        
        color: white;
        border : 1px solid #0078d4;;
    }
    
`
export const Cancel = styled.button`
    color: #0078d4;
    border : 1px solid #0078d4;
    background-color: white;
    width: max-content;
    padding: 5px 10px;
    &:focus{
        outline: none;
    }

    
    &:hover{
        color:  #707070;
        border : 1.5px solid #707070
    }
    
    &:active{
        
        color: #0078d4;
        border : 1px solid #0078d4;;
    }
`

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-bottom: 5vh;
    align-items: center;
    justify-content: center;
    justify-self: center;
    
    & > button:last-child{
        margin-left: 20px
    }

    
`
