import React from 'react';
import FontAwesome from 'react-fontawesome'; 

import './News.css';

class News extends React.Component {
    render(){
      return (
        <section id="news">
          <div className="news-wrapper">
            <div className="c4f-news"></div>
            <div className="global-news"></div>
          </div>
        </section>
      );
    }
}

const MainNew = (props) => {
  return (
    <div className="news-main">
      <div className="news-content">
      
      </div>
    </div>
  );
};

const ArrowNew = (props) => {
  return (
    <div>

    </div>
  );
};

export default News;
