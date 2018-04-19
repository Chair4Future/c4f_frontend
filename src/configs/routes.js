import React from 'react';
import {Switch, Route} from "react-router-dom";

//Layouts
import DefaultLayout from './../layouts/DefaultLayout';

//Pages
import AppPage from './../components/App/App';
import LoginPage from './../pages/LoginPage';
import ProfilePage from './../pages/ProfilePage';


export default class Routes extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={AppPage} />
                <DefaultLayout path="/login" component={LoginPage} />
                <DefaultLayout path="/profile" component={ProfilePage} />
            </Switch>           
        );
    }

} 