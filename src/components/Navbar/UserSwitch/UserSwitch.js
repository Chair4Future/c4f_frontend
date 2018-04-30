import React, { Component} from 'react';
import '../../../styles/loader.css';

const Loader = () => {return <div class="lds-ring"><div></div><div></div><div></div><div></div></div>};

const isObjEmpty = (obj) => {
    return obj == null || (Object.keys(obj).length === 0 && obj.constructor === Object);
} 

const UserSwitchHOC = (WrappedComponent) => {
    return class UserSwitchHOC extends Component {
        render(){
            return isObjEmpty(this.props.user)? <Loader /> : <WrappedComponent {...this.props} />; 
        }
    }
}

@UserSwitchHOC
export default class UserSwitch extends Component {
    state = {

    };
    
    render(){
        return(
            <div className="">Dropdown</div>
        );
    }
}
const UserListItem = (props) => {
    return (
        <div className="user-list-item" key={'c'+props.id}>
            <div className="user-list-item-wrapper">
                <div className="user-list-item-img" style={{backgroundImage: 'url('+ props.img +')'}}/>
                <div className="user-list-item-name">{props.name}</div>
            </div>
        </div>
    );
}