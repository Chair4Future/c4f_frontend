import React from 'react';

export default class MenuLayout extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="menu-layout">
                <div className="menu-content">
                    {this.props.children}
                </div>
                <footer>Footer</footer>
            </div>
        );
    };

}