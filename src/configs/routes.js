import React from 'react';
import {Switch} from "react-router-dom";
//Layouts
import DefaultLayout from './../layouts/DefaultLayout';

//Pages
// import AppPage from './../components/App/App';
import LoginPage from './../pages/LoginPage/LoginPage';
import ProfilePage from './../pages/ProfilePage/ProfilePage';
import CreateOrganization from './../pages/CreateOrganzation/CreateOrganization';
import FeedPage from '../pages/Feed/Feed';

export default class Routes extends React.Component {
    render(){
        return (
            <Switch>
                {/* <Route exact path="/" component={AppPage} /> */}
                <DefaultLayout exact path="/" component={LoginPage} />
                <DefaultLayout exact path="/profile" component={ProfilePage} />
                <DefaultLayout exact path="/organization/create" component={CreateOrganization} />
                <DefaultLayout exact path="/feed" component={FeedPage} />
            </Switch>
        );
    }

} 