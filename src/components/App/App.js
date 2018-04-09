import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import ContactUs from '../ContactUs/ContactUs';
import { smoothInternalAnchorNavigation, hideNavigationBar } from '../../utils/smooth-scrolling';

import './App.css';

class App extends Component {

  componentDidMount() {
    smoothInternalAnchorNavigation();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <section id="cover">
          <div className="cover-container">
            <div className="cover-content">
              <div className="cover-image" />
              <div className="cover-text">
                <div className="cover-slogan">Roadmap for the digital transformation</div>
                <div className="cover-description">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo.
                </div>
              </div>
            </div>
            <div className="cover-annoucements">
              <div className="annoucement">
                <div className="annoucement-content"></div>
                <div></div>
              </div>
            </div>
          </div>
        </section>
        <section id="description"></section>
        <section id="news"></section>
        <ContactUs />
        <footer id="footer">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-column">
                <div className="footer-column-title">At vero eos et accusamus et iusto odio dignissimos</div>
                <div className="footer-column-text">ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio</div>
              </div>
                <div className="footer-column">
                  <div className="footer-column-title">At vero eos et accusamus et iusto odio dignissimos</div>
                  <div className="footer-column-text">ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio</div>
                </div>
                <div className="footer-column">
                  <div className="footer-column-title">At vero eos et accusamus et iusto odio dignissimos</div>
                  <div className="footer-column-text">ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio</div>
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
