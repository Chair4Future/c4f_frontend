import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    constructor(){
      super();

      this.state = {
        show: false
      }
      this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){
      window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
      return window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
      requestAnimationFrame(() => {
        let topDistance = window.scrollY;//ReactDOM.findDOMNode(this).getBoundingClientRect().top * -1;
        if(topDistance > 70){
          this.setState({show: true});
        } else{
          this.setState({show: false});
        }
      })
    }

    render(){
      const { show } = this.state;
      return (
        <header className="header">
            <div className={show? "header-wrapper active": "header-wrapper"}>
              {show && <div className="header-logo" />}
              <div className="header-content">
                <a className="header-nav" href="#description">Projeto</a>
                <a className="header-nav" href="#news">Noticías</a>
                <a className="header-nav" href="#roadmap">Roadmap</a>
                <a className="header-nav" href="#contacts">Contactos</a>
              </div>
            </div>
        </header>
      );
    }
}

export default Navbar;
