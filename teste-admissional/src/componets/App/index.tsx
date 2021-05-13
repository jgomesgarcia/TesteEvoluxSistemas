import React from 'react';
import { Provider } from 'react-redux'; 
import { Container } from './styles';
import Routes from "../../routes"
import GlobalStyle from '../../styles'
import store from '../../storage'

function App() {
    return (
    <Provider store={store}>
        <GlobalStyle />
        <Container>
            <Routes />
        </Container>
    </Provider>
    );
}

export default App;
