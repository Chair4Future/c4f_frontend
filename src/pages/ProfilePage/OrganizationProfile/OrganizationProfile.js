import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { inject } from 'mobx-react';

import './OrganizationProfile.css';
import Container from '../../../components/Container/Container';
import { client } from '../../../configs/axios';

// @inject("")
export default class OrganizationProfile extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            data: undefined,
            id: this.props.user.organization
        };

    }
    
    
    async componentDidMount(){
        try {
            const response = await client.get('/company/'+this.state.id);
            console.log(response)
            
            if(response.status === 200){
                this.setState({data: response.data.company})
            }
        } catch (error) {
            console.error(error);
        }
    } 


    render(){
        return(
            <div>
                <Banner style={{backgroundImage: `url('http://static.goal.com/4323400/4323432_news.jpg')`}}/>
                <div className="pure-g" style={{ marginBottom: "5%"}}>
                    <OrganizationSidebar organization={this.state.data}/>   
                    <OrganizationContainer />
                </div>
            </div>
            
        );
    }  
}

const OrganizationContainer = (props) => {
    return(
        <div className="organization-profile-container pure-u-md-17-24 pure-u-lg-18-24" style={{paddingRight: "10%", paddingLeft: "3%"}}>
            <Container title={"About Us"} color="blue" noPadding={true} >
                <div>
                    Cristiano Ronaldo dos Santos Aveiro é um futebolista português que atua como extremo-esquerdo ou avançado.
                    Atualmente defende o Real Madrid e a Seleção Portuguesa.
                </div>
            </Container> 

            <Container title={"Recrutamento"} color="blue" noPadding={true}  >
                <div>
                    Acerca do recrutamento
                </div>
            </Container> 

            <Container title={"Carreiras"} color="blue" noPadding={true}  >
                <div>
                    Acerca das Carreiras
                </div>
            </Container> 

            <Container title={"Contactos"} color="blue" noPadding={true}  >
                <div>
                    Contactos
                </div>
            </Container> 
        </div>
    );
}


const OrganizationSidebar = ({organization, ...props}) => {
    console.log(organization)
    return (
        <div className="pure-u-md-7-24 pure-u-lg-6-24" style={{position: "relative"}} >
            <div className="organization-profile-sidebar">
                <div className="profile-sidebar-wrapper">
                    <div className="profile-sidebar-main">
                        <div className="organization-img">
                            <img src={'https://media.licdn.com/dms/image/C4D0BAQEN8267JhWtXg/company-logo_200_200/0?e=2126476800&v=beta&t=f_oVK8oXMcr5bZr1y3-OJcMxGy6VCYJxa8ruicJXuVE'} />
                        </div>
                        <div className="profile-sidebar-main-info">

                            <div className="profile-name">{organization && organization.name}</div>
                            <div className="profile-role">1,230,200 followers</div>
                            <hr style={{marginBottom:"10px"}}/>

                            <div className="profile-local" style={{marginBottom:"10px"}}>Tomar, Portugal</div>
                            <div className="profile-button-connect" style={{marginBottom:"20px"}}>
                                <button className="cf-button blue">
                                    <FontAwesome name="link" className="cf-icon" style={{color: "#fff", paddingRight: 5+'px'}}/>
                                    <span>Follow</span>
                                </button>
                            </div>

                            <InfoField title="Bussiness Areas" text="Social Network, Internet, Software"/>
                            <InfoField title="Employees" text="10,000"/>
                            <InfoField title="Website" text="www.ibm.com"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const InfoField = (props) => {
    return(
        <div className="cf-info-field">
            <div className="cf-info-field-title">{props.title}</div>
            <div className="cf-info-field-text">{props.text}</div>
        </div>
    );
}

const Banner = (props) => {
    return (
        <div className="profile-banner" />
    );
}