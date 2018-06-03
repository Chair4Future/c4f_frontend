import React from "react";
import axios from "../../configs/axios";
import { Link } from "react-router-dom";
import Container from "./../../components/Container/Container";
import Countries from "country-list";

import "./LoginPage.css";

const CountryList = Countries().getNameList();

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: undefined,
      secondName: undefined,
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
      country: "AF"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    console.log(this.props);
    event.preventDefault();
    var data = {
      name: this.state.firstName + " " + this.state.secondName,
      email: this.state.email,
      password: this.state.password,
      country_code: this.state.country
    };
    console.log(data);
    await this.registerUser(data);
  }

  async registerUser(data) {
    try {
      const response = await axios.post("/register", data);
      console.log(response);
      if (response === 200) {
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-img" />
        <div className="pure-g ">
          <div className="pure-u-1-2">
            <section id="descript">
              <div className="descript-container">
                <div className="descript-content pure-g">
                  <div className="pure-u-1 descript-text">
                    Take a seat, join the dream!
                  </div>
                  <div className="pure-u-1 descript-text">
                    Share, learn, co-create!
                  </div>
                  <div className="pure-u-1 descript-text">
                    Brainstorm, refine, build!
                  </div>
                  <a
                    href="http://chair4future.ipt.pt"
                    className="descript-learn-how"
                  >
                    Learn how!
                  </a>
                </div>
              </div>
            </section>
          </div>
          <div className="pure-u-1-2">
            <section id="cover">
              <div className="cover-container">
                <div className="cover-registry">
                  <div className="registry-header">Regista-te</div>
                  <div className="registry-container">
                    <div className="pure-g">
                      <input
                        className="registry-name-input pure-u-11-24"
                        placeholder="Nome Próprio"
                      />
                      <div className="pure-u-2-24" />
                      <input
                        className="registry-name-input pure-u-11-24"
                        placeholder="Apelido"
                      />
                    </div>
                    <div className="pure-g">
                      <input
                        className="registry-input pure-u-1"
                        placeholder="Email"
                      />
                    </div>
                    <div className="pure-g">
                      <input
                        className="registry-input pure-u-1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="pure-g">
                      <input
                        className="registry-input pure-u-1"
                        placeholder="Confirmar Password"
                      />
                    </div>
                    <div
                      className="pure-g"
                      style={{ justifyContent: "flex-end !important" }}
                    >
                      <button className="registry">Registar</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
