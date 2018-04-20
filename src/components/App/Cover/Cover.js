import React from 'react';
import FontAwesome from 'react-fontawesome'; 

import './Cover.css';

class Cover extends React.Component {
    constructor(){
      super();

      this.redirectToAnnoucement = this.redirectToAnnoucement.bind(this);
    }

    redirectToAnnoucement(target){

      let link = target;
      console.log(link)
      // window.location.replace(link);
    }

    render(){
      return (
        <section id="cover">
          <div className="cover-container">
            <div className="cover-content">
              <div className="cover-image" />
              <div className="cover-text">
                <div className="cover-slogan">
                  Roadmap for the digital transformation
                </div>
                <div className="cover-description">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </div>
              </div>
            </div>
            <div className="cover-annoucements">
                <div className="annoucements-header">Anúncios</div>
                <div className="annoucements-container">
                    <Annoucement title={"City Hack 2018"} color="purple" content={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."}/>
                    <Annoucement title={"Forum"} color="orange" content={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."}/>
                    <Annoucement title={"Questionário"} link={"http://193.137.5.79/"} onclick={this.redirectToAnnoucement} color="green" content={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."}/>
                </div>
            </div>
          </div>
        </section>
      );
    }
}

const Annoucement = (props) => {
    return (
      <div className={"annoucement "+props.color+""} link={props.link} onClick={props.onclick}>
        <div className="annoucement-header">
          <div className="annoucement-title"><div>{props.title}</div></div>
          <div className="annoucement-redirect"><FontAwesome name='external-link-square-alt' size="2x" style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} /></div>
        </div>
        <div className="annoucement-content">{props.content}</div>
      </div>
    );
  };

export default Cover;
