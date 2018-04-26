import React, { Component } from "react";
import Navbar from "../App/Navbar/Navbar";
import Cover from "../App/Cover/Cover";
import ContactUs from "../App/ContactUs/ContactUs";
import News from "../App/News/News";
import Description from "../App/Description/Description";
import Footer from './../Footer/Footer';
import {
  smoothInternalAnchorNavigation
} from "../../utils/smooth-scrolling";

import "./App.css";

class App extends Component {
  componentDidMount() {
    smoothInternalAnchorNavigation();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Cover />
        <Description />
        <News />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
