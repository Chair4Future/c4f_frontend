import React from 'react';
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import PopupContainer from '../PopupContainer/PopupContainer'

import history from './../../configs/history';

import './Navbar.css';

@inject("user")
@observer
export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.email = React.createRef();
        this.password = React.createRef();

        this.handleLogin = this.handleLogin.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
    }

    async handleLogin() {
        const email = this.email.value;
        const password = this.password.value;

        let result = await this.props.user.AutenticateUser({ email: email, password: password })
        console.log(result)
        if (result){
           this.setState({redirect:true})
           history.push('/profile')
        }
        // display error
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps)
    }

    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;

    //     this.setState({ [name]: value });
    // }

    render() {
        return (
            <nav className="c4f-navbar">
                <div className="c4f-navbar-wrapper">
                    <div className="c4f-navbar-logo" />
                    <div className="c4f-navbar-content">
                        {/* {<AuthNavbar user={this.props.user} />  } */}
        {this.props.user.user ? <AuthNavbar user={this.props.user} /> : <NavbarForm login={this.handleLogin} email={el => this.email = el} password={el => this.password = el} />}
                    </div>
                </div>
            </nav>
        )
    }
}

const NavbarForm = (props) => {
    return (
        <div className="no-auth-content">
            <div className="c4f-navbar-form">
                <div className="c4f-navbar-inputs">
                    <input type="email" name="email" value="admin@a.aa" ref={props.email} className="c4f-input input-login c4f-nav-item" placeholder="Email" />
                    <input type="password" name="password" value="123qweASD" ref={props.password} className="c4f-input input-login c4f-nav-item" placeholder="Password" />
                </div>
            </div>
            <div className="c4f-nav-item">
                <button onClick={async () => await props.login()} className="cf-button transparent">Iniciar Sessão</button>
            </div>
            <div className="c4f-nav-item">
                <a className="no-password">Esqueces-te da password?</a>
            </div>
        </div>
    );
};

const AuthNavbar = (props) => {
    return (
        <div className="auth-content">
            <div className="searchbar c4f-input-group">
                <FontAwesome className="c4f-icon" name='search' />
                <input type="text" className="c4f-input-searchbar" placeholder="Search" />
            </div>
            <div className="c4f-navigation">
                <Link to="/feed"><div className="c4f-navigation-link">Feed</div></Link>
                <div className="c4f-navigation-link">Jobs</div>
                <div className="c4f-navigation-link">Network</div>
                <Link to="/profile"><div className="c4f-navigation-link">Profile</div></Link>
            </div>
            <div className="c4f-icons">
                <div className="c4f-nav-icon">
                    <FontAwesome className="c4f-icon" name='bell' />
                </div>
                <div className="c4f-nav-icon">
                    <FontAwesome className="c4f-icon" name='comment-alt' />
                </div>
                <div className="c4f-nav-icon">
                    <FontAwesome className="c4f-icon" name='user' />
                </div>
                {props.user.user && <PopupContainer user={props.user} />}
            </div>
        </div>
    );
};

