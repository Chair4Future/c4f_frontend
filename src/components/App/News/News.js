import React from 'react';
import FontAwesome from 'react-fontawesome'; 

import './News.css';

// TODO'S:
//-on hover mostrar botão para ver mais, lado direto (cima ou baixo), apenas com border (2px), letras grandes
//mostrar mais informação na noticia (data...)??
//melhorar a estrutura no react

class News extends React.Component {
    render(){
      return (
        <section id="news">
          <div className="news-wrapper">
            <div className="c4f-news">
              <div className="news-container">
                <div className="news-header">
                  <div className="news-title">Chair4Future News</div>
                  <div className="news-description">
                    eqwjewqkwjekwqj jwkqjkwqjk ejkq kjeqk jwkqj klewqjl 
                  </div>
                </div>
                <MasterNew />
                <MainNew /> 
                <MainNew /> 
              </div>
              
            </div>
            <div className="global-news"></div>
          </div>
        </section>
      );
    }
}

const MasterNew = (props) => {
  return (
    <div className="news-master">
      <div className="news-master-content">
        <div className="news-master-wrapper">
          <div className="news-master-title">Sed ut perspiciatis unde omnis iste natus error sit</div>
          <div className="news-master-short-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</div>
        </div>
      </div>
    </div>
  );
};


const MainNew = (props) => {
  return (
    <div className="news-main">
      <div className="news-main-content">
        <div className="news-main-text">
          <div className="news-main-title">Sed ut perspiciatis unde omnis iste natus error sit</div>
          <div className="news-main-short-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</div>
        
        </div>
        <div className="news-main-image" />
      </div>
    </div>
  );
};

const NormalNew = (props) => {
  return (
    <div>

    </div>
  );
};

export default News;
