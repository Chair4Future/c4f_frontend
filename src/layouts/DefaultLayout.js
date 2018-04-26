import React from 'react';
import { Route, Redirect } from "react-router-dom";
import FontAwesome from 'react-fontawesome'
import { Grid, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';


const DefaultLayout = ({ component: Component, ...props }) => {
    return (
        <Route {...props} render={rest => (
            <div className="layout default-layout">
                <Navbar />
                <div className="c4f-default-container">
                    <Component />
                </div>
                <Footer />
            </div >
        )} />
    )
}

export default DefaultLayout;