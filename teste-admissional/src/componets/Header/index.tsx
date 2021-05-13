import React from 'react';
import { Container, Logo } from './styles'
import logo from '../../images/logo.png'

const Header: React.FC = (): React.ReactElement => {
    return (<Container>
        <Logo src={logo}/>
    </Container>)
}

export default Header