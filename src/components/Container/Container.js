import React from 'react';
import FontAwesome from 'react-fontawesome';
import './container.css';

export default ({ title, footer, icons, icon, className, color, noPadding, onIconClick, ...props }) => {
    return (
        <div className={className} {...props}>
            <div className="cf-container" style={(noPadding? {paddingBottom: "10px"} : {})}>
                <div className="cf-container-wrapper">
                    <div className="cf-container-header">
                        <div className={"cf-container-title "+ (color? color: "")}>{title}</div>
                        {icons ?
                            <div>{icons}</div>
                            :
                            <div className="cf-container-btn-option" onClick={onIconClick && (() => onIconClick())}>
                                <FontAwesome name={icon || ""} className="cf-icon"/>
                            </div>
                        }
                    </div>
                    <div className="cf-container-content">
                        {props.children}
                    </div>
                    {footer && <div className="cf-container-footer">{footer}</div>}
                </div>
            </div>
        </div>
        
    );  
};