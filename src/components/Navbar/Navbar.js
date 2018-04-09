import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';
import $ from 'jquery';


/**
 * This utility function allows function calls to be debounced.
 * @param {Function} func Function that requires debouncing
 * @param {Number} wait Wait time in milliseconds between successive invocations
 */
const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

class Navbar extends React.Component {
    constructor(){
      super();

      this.state = {
        show: false
      }
      this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){
      window.addEventListener("scroll", debounce(this.handleScroll, 16));
    }

    componentWillUnmount() {
      return window.removeEventListener('scroll', debounce(this.handleScroll, 16))
    }

    handleScroll(){
      // console.log(window.scrollY)
      // let topDistance = ReactDOM.findDOMNode(this).getBoundingClientRect().top * -1;
      // if(topDistance > 70){
      //   this.setState({show: true});
      // } else{
      //   this.setState({show: false});
      // }
    }

    render(){
      const { show } = this.state;
      // show? "header active" : "header"
      return (
        <header className="header">
            <div className="header-logo" />
            <div className="header-content">
              <a className="header-nav" href="#description">Project</a>
              <a className="header-nav" href="#news">Noticías</a>
              <a className="header-nav" href="#roadmap">Roadmap</a>
              <a className="header-nav" href="#contacts">Contactos</a>
            </div>
        </header>
      );
    }
}

export default Navbar;
