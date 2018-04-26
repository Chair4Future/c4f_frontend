import React from 'react';
import Container from './../../components/Container/Container';
import FontAwesome from 'react-fontawesome';
import history from './../../configs/history'

import './ProfilePage.css';

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state={

        };
    }

    render() {
        return (
            <div className="pure-g">
                <div className="profile-sidebar pure-u-1 pure-u-md-7-24 pure-u-lg-6-24">
                    <ProfileSidebar />
                </div>
                <div className="profile-content pure-u-1 pure-u-md-17-24 pure-u-lg-18-24">
                    <div className="profile-content-wrapper">
                        <Container title={"Summary"} edit={true} icon="ellipsis-h">
                            <div>
                                Cristiano Ronaldo dos Santos Aveiro é um futebolista português que atua como extremo-esquerdo ou avançado.
                                Atualmente defende o Real Madrid e a Seleção Portuguesa.
                            </div>
                        </Container> 
                        <Container title={"Current position"} edit={true} icon="ellipsis-h">
                            <CompanyItem />
                        </Container> 
                        <Container title={"Skills"} edit={true} icon="plus">
                            <div className="skills-container">
                                <SkillItem name="c#"/>
                                <SkillItem name="React JS"/>
                                <SkillItem name="Java"/>
                                <SkillItem name="Frontend Developer"/>
                                <SkillItem name="Web Designer"/>
                            </div>
                        </Container> 
                        <Container title={"Experience"} edit={true} icon="ellipsis-h">
                            <div></div>
                        </Container> 
                    </div>
                    <button onClick={() => history.push('/organization')}>Add Organization</button>
                </div>
            </div>
        );
    };

}   


const ProfileSidebar = (props) => {
    return (
        <div className="profile-sidebar-wrapper">
            <div className="profile-sidebar-main">
                <div className="profile-sidebar-img">
                    <img style={{backgroundImage: `url('http://static.goal.com/4323400/4323432_news.jpg')`}} />
                </div>
                <div className="profile-sidebar-main-info">
                    <div className="profile-name">Cristiano Ronaldo</div>
                    <div className="profile-role">Futebolista</div>
                    <div className="profile-local">Tomar, Portugal</div>
                    <div className="profile-button-connect">
                        <button className="cf-button cf-button-round green">Connect</button>
                    </div>
                </div>
                <div className="profile-sidebar-contacts">

                </div>
            </div>
            <hr />
            <div className="profile-sidebar-following">
                <div>link chair4future</div>
                <div>site pessoal</div>
                <div>icons de outras redes sociais</div>
            </div>
        </div>
    );
}

const CompanyItem = (props) => {
    return(
        <div className="company-item">
            <div className="company-content">
                <div className="company-header">
                    <span>Frontend Developer at </span>
                    <span className="company">Softinsa</span>
                </div>
                <ItemWithIcon icon="map-marker" text="Tomar, Santarém, Portugal" />
                <ItemWithIcon icon="calendar-alt" text="September 2017 - Present" />
            </div>
            <div className="company-image">
                <div style={{backgroundImage: `url('http://www.softinsa.pt/media/2017/12/85ad3272-460d-489f-bbbb-83a88a62892f-1513956143838.jpg')`}}/>
            </div>
        </div>
    );
}

const SkillItem = (props) => {
    return(
        <div className="cf-label-skill">{props.name}</div>
    );
}

const ItemWithIcon = (props) => {
    return(
        <div className="cf-item-w-icon">
            <div className="cf-item-icon"><FontAwesome name={props.icon} className="cf-icon"/></div>
            <div className="cf-item-text">{props.text}</div>
        </div>
    );
}

