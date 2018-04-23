import React from 'react';
import {Switch} from "react-router-dom";
//Layouts
import DefaultLayout from './../layouts/DefaultLayout';

//Pages
// import AppPage from './../components/App/App';
import LoginPage from './../pages/LoginPage/LoginPage';
import ProfilePage from './../pages/ProfilePage/ProfilePage';


export default class Routes extends React.Component {
    render(){
        return (
            <Switch>
                {/* <Route exact path="/" component={AppPage} /> */}
                <DefaultLayout exact path="/" component={LoginPage} />
                <DefaultLayout exact path="/profile" component={ProfilePage} />
            </Switch>
        );
    }

} 