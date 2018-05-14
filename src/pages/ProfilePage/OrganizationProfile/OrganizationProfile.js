import React, { Component } from 'react';
import { inject } from 'mobx-react';

import './OrganizationProfile.css';

// @inject("")
export default class OrganizationProfile extends Component {

    state = {
        selectedIndex: 1
    };

    render(){
        return(
            <div>
                <Banner style={{backgroundImage: `url('http://static.goal.com/4323400/4323432_news.jpg')`}}/>
                <div className="pure-g">
                    <OrganizationSidebar />    
                    <OrganizationContainer />
                </div>
            </div>
            
        );
    }  
}


const OrganizationContainer = () => {
    return (
        <div className="organization-profile-container pure-u-md-17-24 pure-u-lg-18-24">
            org info
        </div>
    );
}


const OrganizationNavbar = (props) => {
    return (
        <div >
            
        </div>
    );
}

const OrganizationSidebar = () => {
    return (
        <div className="organization-profile-sidebar pure-u-md-7-24 pure-u-lg-6-24">
            <div className="profile-sidebar-wrapper">
                <div className="profile-sidebar-main">
                    <div className="profile-sidebar-img">
                        <div style={{backgroundImage: `url('http://static.goal.com/4323400/4323432_news.jpg')`}} />
                    </div>
                    <div className="profile-sidebar-main-info">
                        
                    </div>
                    <div className="profile-sidebar-contacts">
                        <div>link chair4future</div>
                        <div>site pessoal</div>
                        <div>icons de outras redes sociais</div>
                    </div>
                </div>
                <hr />
                <div className="profile-sidebar-following">
                    
                </div>
            </div>
        </div>
    );
}

const Banner = (props) => {
    return (
        <div className="profile-banner" />
    );
}