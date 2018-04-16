import React from 'react';
import {Route} from "react-router-dom";

const DefaultLayout = ({component: Component, ...props}) => {
    return (
        <Route {...props} render={ rest => (
            <div className="default-layout">
                <header>
                    <div>Navbar</div>
                </header>
                <div className="default-container">
                    <Component  />
                </div>
                <footer>Footer</footer>
            </div>
        )} />
    )
}

export default DefaultLayout;