import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import PopupContainer from "../PopupContainer/PopupContainer";

import history from "./../../configs/history";

import "./Navbar.css";

@inject("user")
@observer
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      email: "user@c4f.pt",
      password: "123qweASD"
    };
    this.email = React.createRef();
    this.password = React.createRef();

    this.handleLogin = this.handleLogin.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async handleLogin() {
    let result = await this.props.user.AutenticateUser({
      email: this.state.email,
      password: this.state.password
    });
    console.log(result);
    if (result) {
      this.setState({ redirect: true });
      history.push("/profile");
    }
    // display error
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <nav className="c4f-navbar">
        <div className="c4f-navbar-wrapper">
          <div className="c4f-navbar-logo" />
          <div className="c4f-navbar-content">
            {/* {<AuthNavbar user={this.props.user} />  } */}
            {this.props.user.user ? (
              <AuthNavbar user={this.props.user} />
            ) : (
              <NavbarForm
                login={this.handleLogin}
                handleInputChange={this.handleInputChange}
                email={this.state.email}
                password={this.state.password}
              />
            )}
          </div>
        </div>
      </nav>
    );
  }
}

const NavbarForm = props => {
  return (
    <div className="no-auth-content">
      <div className="c4f-navbar-form">
        <div className="c4f-navbar-inputs">
          <input
            type="email"
            name="email"
            value={props.email}
            className="c4f-input input-login c4f-nav-item"
            placeholder="Email"
            onChange={props.handleInputChange}
          />
          <input
            type="password"
            name="password"
            value={props.password}
            className="c4f-input input-login c4f-nav-item"
            placeholder="Password"
            onChange={props.handleInputChange}
          />
        </div>
      </div>
      <div className="c4f-nav-item">
        <button
          onClick={async () => await props.login()}
          className="cf-button transparent"
        >
          Iniciar Sessão
        </button>
      </div>
      <div className="c4f-nav-item">
        <a className="no-password">Esqueces-te da password?</a>
      </div>
    </div>
  );
};

const AuthNavbar = props => {
  return (
    <div className="auth-content">
      <div className="searchbar c4f-input-group">
        <FontAwesome className="c4f-icon" name="search" />
        <input
          type="text"
          className="c4f-input-searchbar"
          placeholder="Search"
        />
      </div>
      <div className="c4f-navigation">
        <Link to="/feed">
          <div className="c4f-navigation-link">Feed</div>
        </Link>
        <div className="c4f-navigation-link">Jobs</div>
        <div className="c4f-navigation-link">Network</div>
        <Link to="/profile">
          <div className="c4f-navigation-link">Profile</div>
        </Link>
      </div>
      <div className="c4f-icons">
        <div className="c4f-nav-icon">
          <FontAwesome className="c4f-icon" name="bell" />
        </div>
        <div className="c4f-nav-icon">
          <FontAwesome className="c4f-icon" name="comment-alt" />
        </div>
        <div className="c4f-nav-icon">
          <FontAwesome className="c4f-icon" name="user" />
        </div>
        {props.user.user && <PopupContainer user={props.user} />}
      </div>
    </div>
  );
};
