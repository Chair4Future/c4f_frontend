import React from 'react';
import { Route, Redirect } from "react-router-dom";
import './DefaultLayout.css';
import FontAwesome from 'react-fontawesome'
import { Grid, Row, Col } from 'react-bootstrap';


const DefaultLayout = ({ component: Component, ...props }) => {

    this.state = {
        loggedIn: true
    }

    return (
        <Route {...props} render={rest => (
            <div className="default-layout">
                <nav className="c4f-navbar">
                    <div className="c4f-navbar-wrapper">
                        <div className="c4f-navbar-logo"></div>
                        {this.state.loggedIn && <div className="c4f-navbar-search">
                            <FontAwesome id="search-icon" name='search' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', fontSize: "20px", marginRight: 12 + "px" }} />
                            <input className="c4f-navbar-search-input" placeholder="Search..." /></div>
                        }
                        <div className="c4f-navbar-content">
                            {!this.state.loggedIn && <Grid className="c4f-grid-navbar">
                                <Row className="show-grid">
                                    <Col lg={5}>
                                        <input type="email" className="c4f-navbar-content-input" placeholder="Email" />
                                    </Col>
                                    <Col lg={5}>
                                        <input type="password" className="c4f-navbar-content-input" placeholder="Password" />
                                    </Col>
                                    <Col lg={2}>
                                        <button className="c4f-navbar-content-login-button">Iniciar Sessão</button>
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col lg={5}></Col>
                                    <Col lg={5}><a className="c4f-navbar-content-password">Esqueceu-se da password?</a></Col>
                                </Row>
                            </Grid>
                            }
                            {this.state.loggedIn && <Grid className="c4f-grid-navbar">
                            <Row className="show-grid">
                                    <Col lg={4}>
                                        <button className="c4f-grid-navbar-button">
                                        <FontAwesome name='envelope' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', fontSize:"20px", padding:"8px" }} />
                                        </button>
                                    </Col>
                                    <Col lg={4}>
                                    <button className="c4f-grid-navbar-button" onClick={() => window.location.assign("/profile")}><FontAwesome name='user' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', fontSize:"20px", padding:"8px" }} />
                                        </button>
                                    </Col>
                                    <Col lg={4}>
                                        <button className="c4f-grid-navbar-button">
                                        <FontAwesome name='sign-out-alt' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', fontSize:"20px", padding:"8px" }} />
                                        </button>
                                    </Col>
                                </Row>
                            </Grid>}
                        </div>
                    </div>
                </nav>
                <div className="c4f-default-container">
                    <Component />
                </div>
                <footer className="footer">Footer</footer>
            </div >
        )} />
    )
}

export default DefaultLayout;