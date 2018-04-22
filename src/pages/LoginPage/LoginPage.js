import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

import CountryList from 'country-list';

import './LoginPage.css';


export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryList: CountryList().getNameList(),
            firstName:undefined,
            secondName:undefined,
            email:undefined,
            password:undefined,
            confirmPassword:undefined,
            country: 'AF'
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;


        this.setState({[name]: value});
    }

    handleSubmit(event) {
        event.preventDefault();
        var toSend= {
            name:this.state.firstName + ' ' + this.state.secondName,
            email:this.state.email,
            password: this.state.password == this.state.confirmPassword ? this.state.password : console.log('error'),
            country: this.state.country
        }

        console.log(toSend)
    }

    render() {
        return (
            <div className="c4f-login-page">
                <div className="c4f-container">
                    <div className="c4f-content">
                        <div className="c4f-column">
                            <div className="c4f-login-form">
                                <Grid fluid>
                                    <Row className="show-grid">
                                        <div className="c4f-column-title">Cria a tua conta</div>
                                    </Row>
                                    <Row className="show-grid">
                                        <Col lg={6}>
                                            <div className="c4f-column-content-text">Primeiro Nome</div>
                                            <input name="firstName" onChange={this.handleInputChange} className="c4f-column-content-input" />
                                        </Col>
                                        <Col lg={6}>
                                            <div className="c4f-column-content-text">Apelido</div>
                                            <input name="secondName" onChange={this.handleInputChange} className="c4f-column-content-input" /></Col>
                                    </Row>
                                    <Row className="show-grid">
                                        <Col lg={12}>
                                            <div className="c4f-column-content-text">Email</div>
                                            <input name="email" onChange={this.handleInputChange} className="c4f-column-content-input" type="email" />
                                        </Col>
                                    </Row>
                                    <Row className="show-grid">
                                        <Col lg={12}>
                                            <div className="c4f-column-content-text">Password</div>
                                            <input name="password" onChange={this.handleInputChange} className="c4f-column-content-input" type="password" />
                                        </Col>
                                    </Row>
                                    <Row className="show-grid">
                                        <Col lg={12}>
                                            <div className="c4f-column-content-text">Confirmar Password</div>
                                            <input name="confirmPassword" onChange={this.handleInputChange} className="c4f-column-content-input" type="password" />
                                        </Col>
                                    </Row>
                                    <Row className="show-grid">
                                        <Col lg={12}>
                                            <div className="c4f-column-content-text">Country</div>
                                            <select onChange={(e) =>this.setState({country:(e.target.options[e.target.selectedIndex].value)})}>
                                                {Object.keys(this.state.countryList).map(key => {
                                                    return <option  key={this.state.countryList[key]} value={this.state.countryList[key]}>{key.charAt(0).toUpperCase() + key.slice(1)}</option>
                                                })
                                                }
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="show-grid">
                                        <Col lg={12}>
                                            <button onClick={this.handleSubmit} className="c4f-column-content-button">Criar conta
                                            </button>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                        </div>
                        <div className="c4f-column">
                            <div className="c4f-logo-image" style={{ textAlign: "center" }}>
                                <div className="c4f-column-content-text" style={{ position: "absolute", marginTop: "150px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

}