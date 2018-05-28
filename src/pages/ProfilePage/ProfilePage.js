import React from 'react';
import { inject, observer } from 'mobx-react';
import UserProfile from './UserProfile/UserProfile';
import OrganizationProfile from './OrganizationProfile/OrganizationProfile';

import './ProfilePage.css';

@inject("user")
@observer
export default class ProfilePage extends React.Component {

    render() {
        return (
            <div>
                {this.props.user.organization?
                    <OrganizationProfile {...this.props}/>
                :
                    <UserProfile {...this.props}/>
                }
            </div>
        );
    };
}   

