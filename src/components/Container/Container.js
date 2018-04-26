import React from 'react';
import FontAwesome from 'react-fontawesome';
import './container.css';

export default ({ title, footer, edit, icon, ...props }) => {
    return (
        <div className="cf-container pure-u-1 pure-u-md-12-24 pure-u-lg-12-24" {...props}>
            <div className="cf-container-wrapper">
                <div className="cf-container-header">
                    <div className="cf-container-title">{title}</div>
                    {edit === true && <div className="cf-container-btn-option">
                        <FontAwesome name={icon} className="cf-icon"/>
                    </div>}
                </div>
                <div className="cf-container-content">
                    {props.children}
                </div>
                {footer && <div className="cf-container-footer">{footer}</div>}
            </div>
        </div>
    );  
};