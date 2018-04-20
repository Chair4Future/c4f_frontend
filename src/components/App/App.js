import React, { Component } from "react";
import Navbar from "../App/Navbar/Navbar";
import Cover from "../App/Cover/Cover";
import ContactUs from "../App/ContactUs/ContactUs";
import News from "../App/News/News";
import Description from "../App/Description/Description";
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
        <footer id="footer">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-column">
                <div className="footer-column-title">
                  About Us
                </div>
                <div className="footer-column-text">
                  ducimus qui blanditiis praesentium voluptatum deleniti atque
                  corrupti quos dolores et quas molestias excepturi sint
                  occaecati cupiditate non provident, similique sunt in culpa
                  qui officia deserunt mollitia animi, id est laborum et dolorum
                  fuga. Et harum quidem rerum facilis est et expedita distinctio
                </div>
              </div>
              <div className="footer-column">
                <div className="footer-column-title">
                  Partners
                </div>
                <div className="footer-column-text">
                  ducimus qui blanditiis praesentium voluptatum deleniti atque
                  corrupti quos dolores et quas molestias excepturi sint
                  occaecati cupiditate non provident, similique sunt in culpa
                  qui officia deserunt mollitia animi, id est laborum et dolorum
                  fuga. Et harum quidem rerum facilis est et expedita distinctio
                </div>
              </div>
              <div className="footer-column">
                <div className="footer-column-title">
                  Social 
                </div>
                <div className="footer-column-text">
                  ducimus qui blanditiis praesentium voluptatum deleniti atque
                  corrupti quos dolores et quas molestias excepturi sint
                  occaecati cupiditate non provident, similique sunt in culpa
                  qui officia deserunt mollitia animi, id est laborum et dolorum
                  fuga. Et harum quidem rerum facilis est et expedita distinctio
                </div>
              </div>
            </div>
            {/* <hr className="footer-hr"/> */}
            <div className="footer-base">© 2018 Chair4Future. All Rights Reserved.</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
