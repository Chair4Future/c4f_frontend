import React from 'react';
import Container from './../../../components/Container/Container';
import FontAwesome from 'react-fontawesome';

import './UserProfile.css';
import { InfoField } from '../OrganizationProfile/OrganizationProfile';

export default class UserProfile extends React.Component {
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
                        <ProfileTextContainer title={"Summary"} icon="cog" className="pure-u-md-12-24"/>
                        
                        <Container title={"Current position"} className="pure-u-md-12-24">
                            <CompanyItem companyRole="Software Engineer" company="Critical Software" local="Tomar, Santarém, Portugal" timelapse="May 2018 - Present" image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/CSW_Gradiente_rgb.png/220px-CSW_Gradiente_rgb.png" />
                        </Container> 

                        <ProfileSkillsContainer title={"Skills"} icon="plus" className="pure-u-md-12-24"/>
     
                        <Container title={"Experience"} icon="ellipsis-h" className="pure-u-md-12-24">
                            <ExperienceItem companyRole="Software Engineer" company="Critical Software" local="Tomar, Santarém, Portugal" timelapse="May 2018 - Present" image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/CSW_Gradiente_rgb.png/220px-CSW_Gradiente_rgb.png" />
                            <ExperienceItem companyRole="Frontend Developer" company="Softinsa" local="Tomar, Santarém, Portugal" timelapse="September 2017 - May 2018" image="http://www.softinsa.pt/media/2017/12/85ad3272-460d-489f-bbbb-83a88a62892f-1513956143838.jpg" />
                        </Container> 
                    </div>
                    {/* <button onClick={() => history.push('/organization')}>Add Organization</button> */}
                </div>
            </div>
        );
    };
}   
class ProfileSkillsContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            edit: false,
            name: "",
            level: 1,
            skills: []
        }
    }

    _onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    _closeEdit = () => {
        console.log("close")
        this.setState({edit: false})
    }

    _saveEdit = () => {
        console.log("save")
        //call à api com o texto 
        this.setState({name: "", level: 1})
    }

    _changeToEdit = () => {
        this.setState((prevState, props) => { return {edit: !prevState.edit}})
    }

    render(){
        const {edit, skills, name, level} = this.state;

        return (
            <Container {...this.props} icon={"cog"} onIconClick={this._changeToEdit}>
                
                <div className="profile-skills-container">
                    { edit && <ProfileSkillForm name={name} level={level} onChange={this._onChange} onSave={this._saveEdit} onClose={this._closeEdit}  />}
                    
                    <div className="profile-skills-list">
                        <SkillItem name="c#" level={1} />
                        <SkillItem name="React JS" level={1}/>
                        <SkillItem name="Java" level={1}/>
                    </div>
                </div>
            </Container> 
        );
    }

}
const ProfileSkillForm = (props) => {
    return(
        <div style={{textAlign: "center", marginBottom: "20px"}}>
            <input style={{marginRight: "1%"}} placeholder="Skill name" name="name" className="input-form" onChange={(e)=> props.onChange(e)} value={props.name}/>
            <select style={{marginRight: "7%"}} className="input-form" name="level" onChange={(e)=> props.onChange(e)} value={props.level}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <button className="cf-button-icon exit" onClick={() => props.onClose()}>
                <FontAwesome name="times" className="cf-icon"/>
            </button>
            <button className="cf-button-icon save" onClick={() => props.onSave()}>
                <FontAwesome name="check" className="cf-icon"/>
            </button>
        </div>
    );
}
const SkillItem = (props) => {
    return(
        <div className="cf-skill-label">
            <div className="cf-skill-label-level">
                {props.level}
            </div>
            <div className="cf-skill-label-name">
                {props.name}
            </div>
        </div>
    );
}

class ProfileTextContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            edit: false,
            tempText: "Cristiano Ronaldo dos Santos Aveiro é um futebolista português que atua como extremo-esquerdo ou avançado. \nAtualmente defende o Real Madrid e a Seleção Portuguesa.",
            text: "Cristiano Ronaldo dos Santos Aveiro é um futebolista português que atua como extremo-esquerdo ou avançado. \nAtualmente defende o Real Madrid e a Seleção Portuguesa."
        }
    }
    
    _editButtons = <div>
        <button className="cf-button-icon exit" onClick={() => this._closeEdit()}>
            <FontAwesome name="times" className="cf-icon"/>
        </button>
        <button className="cf-button-icon save" onClick={() => this._saveEdit()}>
            <FontAwesome name="check" className="cf-icon"/>
        </button>
    </div>;

    _onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    _closeEdit = () => {
        console.log("close")
        this.setState((prevState, props) => {return {edit: false, tempText: prevState.text }})
    }

    _saveEdit = () => {
        console.log("save")
        //call à api com o texto 
        this.setState({edit: false})
    }

    _changeToEdit = () => {
        console.log("ola")
        this.setState((prevState, props) => { return {edit: !prevState.edit}})
    }

    render(){
        const {edit, text, tempText} = this.state;
        return (
            <Container {...this.props} icons={edit? this._editButtons : null} onIconClick={this._changeToEdit}>
                {edit?
                    <textarea className="cf-profile-textarea" cols="30" rows="4" name="tempText" value={tempText} onChange={(e) => this._onChange(e)}/>
                    :
                    <div onClick={this._changeToEdit}>
                        {text}
                    </div>
                }
                
            </Container> 
        );
    }
}

const ProfileSidebar = (props) => {
    return (
        <div className="profile-sidebar-wrapper">
            <div className="profile-sidebar-main">
                <div className="profile-sidebar-img">
                    <div style={{backgroundImage: `url('http://static.goal.com/4323400/4323432_news.jpg')`}} />
                </div>
                <div className="profile-sidebar-main-info">
                    <div className="profile-name">Cristiano Ronaldo</div>
                    <div className="profile-role">Futebolista</div>
                    <div className="profile-local">Tomar, Portugal</div>
                </div>
                <div className="profile-sidebar-contacts">

                </div>
            </div>
            <div className="profile-sidebar-following">
                <InfoField title="Email" text="chair4future@ae.com"/>
                <InfoField title="Website" text="www.chair4future.com"/>
                <InfoField title="Facebook" text={<a href="http://www.facebook.com">www.facebook.com</a>}/>
            </div>
        </div>
    );
}

const ExperienceItem = (props) => {
    return (
        <div className="experience-item">
            <div className="experience-node-wrapper">
                <div className="experience-node">
                    <div className="experience-node-line" />
                    <i className="fas fa-genderless experience-node-icon"></i>
                    {/* <FontAwesome className="experience-node-icon" name="genderless" /> */}
                </div>
            </div>
            <CompanyItem {...props}/>
        </div>
    );
}

const CompanyItem = (props) => {
    return(
        <div className="company-item">
            <div className="company-content">
                <div className="company-header">
                    <span>{props.companyRole} at </span>
                    <span className="company">{props.company}</span>
                </div>
                <ItemWithIcon icon="map-marker" text={props.local} />
                <ItemWithIcon icon="calendar-alt" text={props.timelapse} />
            </div>
            <div className="company-image">
                <div style={{backgroundImage: 'url("'+props.image+'")'}}/>
            </div>
        </div>
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

