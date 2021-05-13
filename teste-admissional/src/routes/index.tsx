import  React from 'react';
import { Switch, Route, MemoryRouter as Router, useRouteMatch, Redirect, useLocation, useHistory, useParams } from "react-router-dom";
import { SwitchContainer } from './styles';

import Header from '../componets/Header'

import Home from '../pages/Home';


export default function Routes() {
    return (
        <Router >
            <Header />
            <SwitchContainer>
                <Route exact path="/" component={() => <Home/>} />
            </SwitchContainer>
        </Router>
    )
}