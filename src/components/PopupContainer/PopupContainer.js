import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {Animated} from "react-animated-css";
import { observer } from 'mobx-react';

import './popup-container.css';

@observer
export default class PopupContainer extends Component {
    state = {
        open: false
    };

    constructor(props){
        super(props);
        this.showContainer = this.showContainer.bind(this);
        this.organizationSelected = this.organizationSelected.bind(this);
        this.switchBackToUser = this.switchBackToUser.bind(this);
    }

    showContainer(){
        this.setState((prevState, props) => ({
            open: !prevState.open
          }));
    }

    switchBackToUser(){
        this.props.user.organizationReset();
    }

    organizationSelected(id){
        this.props.user.organizationUpdate(id);
    }

    render(){
        const { organization, user} = this.props.user;
        const { open } = this.state;
        const currentOrganization = organization? user.organizations.find(q => q.id === organization) : null;

        return(
            <div className="popup-container">
                <div onClick={this.showContainer} className={open? "popup-container-button active": "popup-container-button"}>
                    {currentOrganization == null? 
                        <PopupContainerUser id={user.id} isVisible={true} name={user.nameComplete} img={user.image} icon="ellipsis-v" />
                        :
                        <PopupContainerUser id={currentOrganization.id} isVisible={true} name={currentOrganization.name} img={currentOrganization.img} icon="ellipsis-v" />
                    }
                </div>
                <PopupContent open={open}>
                    <PopupContainerDivider name="Definitions" header={true}/>
                    { organization != null && <PopupContainerItem name="Switch to User" icon="exchange-alt" click={this.switchBackToUser}/>}
                    <PopupContainerItem name="Settings" icon="cog"/>

                    <PopupContainerDivider name="My Organizations"/>
                    <div className="popup-container-organizations">
                        {user.organizations.map(org => {
                            return <PopupContainerUser id={org.id} key={'c'+org.id} isSelected={currentOrganization && currentOrganization.id === org.id} isVisible={true} name={org.name} img={org.img} click={this.organizationSelected}/>;
                        })}
                    </div>

                    <PopupContainerItem name="Logout" icon="sign-out-alt"/>
                </PopupContent>
            </div>
        );
    }
}

const PopupContainerItem = (props) => {
    return (
        <div className="popup-container-item" onClick={props.click && (() => props.click())}>
            <div className="popup-item-icon">
                { props.icon && <FontAwesome name={props.icon} />}
            </div>
            <div className="popup-item-name">{props.name}</div>
        </div>
    );
}

const PopupContainerDivider = (props) => {
    return (
        <div className="popup-container-divider">
            <div className={props.header? "divider-name header" : "divider-name"}>{props.name}</div>
        </div>
    );
}

const PopupContainerUser = ({id, name, img, icon, isVisible, isSelected, ...props}) => {
    return (
        <Animated animationIn="fadeIn" animationOut="zoomOutUp" isVisible={isVisible}>
            <div className={isSelected? "popup-container-user active" : "popup-container-user"} /*style={!isVisible? {display: "none"}:{}}*/ onClick={props.click && (() => props.click(id))}>
                <div className="popup-user-content">
                    <div className="popup-user-img" style={{backgroundImage: 'url('+ img +')'}}/>
                    <div className="popup-user-name">{name}</div>
                </div>
                <div className="popup-user-icon">
                    { icon &&<FontAwesome name={icon}/> }
                </div>
            </div>
        </Animated>
    );
}

class PopupContent extends Component{
    render(){
        if(this.props.open)
            return (
                <div className="popup-container-content">
                    {this.props.children}
                </div>
            );
        return null;
    }
    
}