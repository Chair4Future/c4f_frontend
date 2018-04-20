import React from 'react';
import { Route, Redirect } from "react-router-dom";
import './DefaultLayout.css';
import FontAwesome from 'react-fontawesome'
import { Grid, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar/Navbar';


const DefaultLayout = ({ component: Component, ...props }) => {
    return (
        <Route {...props} render={rest => (
            <div className="default-layout">
                <Navbar />
                <div className="c4f-default-container">
                    <Component />
                </div>
                <footer className="footer">Footer</footer>
            </div >
        )} />
    )
}

export default DefaultLayout;