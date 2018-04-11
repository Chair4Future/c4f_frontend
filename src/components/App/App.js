import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Cover from "../Cover/Cover";
import ContactUs from "../ContactUs/ContactUs";
import News from "../News/News";
import Description from "../Description/Description";
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
                  At vero eos et accusamus et iusto odio dignissimos
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
                  At vero eos et accusamus et iusto odio dignissimos
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
                  At vero eos et accusamus et iusto odio dignissimos
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
            <div className="footer-base">ducimus qui blanditiis pra</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
