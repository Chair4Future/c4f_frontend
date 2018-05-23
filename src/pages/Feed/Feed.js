import React, { Component } from 'react';
import './feed.css';
import FontAwesome from 'react-fontawesome';

export default class Feed extends Component {
    state = {
        publications: [
            {
                id: 1,
                organization: {
                    name: "Softinsa",
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
                    profileUrl: "",
                },
                date: Date.now(),
                title: "O primeiro post",
                image: "http://backgroundcheckall.com/wp-content/uploads/2017/12/background-company.png",
                text: "Has closed eyes but still sees you sleep on dog bed, force dog to sleep on floor but ask for petting somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock. Sit on human they not getting up ever dream about hunting birds claw your carpet in places everyone can see - why hide my amazing artistic clawing skills? yet attack the dog then pretend like nothing happened hiss and stare at nothing then run suddenly away if human is on laptop sit on the keyboard. Fooled again thinking the dog likes me roll on the floor purring your whiskers off for intently stare at the same spot scratch the box pose purrfectly to show my beauty and leave fur on owners clothes. Vommit food and eat it again. Hide head under blanket so no one can see lick human with sandpaper tongue wake up human for food at 4am but annoy kitten brother with poking. Sniff other cat's butt and hang jaw half open thereafter get video posted to internet for chasing red dot find empty spot in cupboard and sleep all day.",
                commentsNumber: 12,
                likes: 1923,
                views: 1
            }
        ]
    }

    render() {
        return (
            <div className="pure-g publications">
                {/* <Sidebar /> quando ativar isto, tirar a class de publications*/}
                <div className="pure-u-md-8-24 pure-u-lg-9-24">
                    <WritePublication state={this.state} />
                    <FeedContainer publications={this.state.publications} />
                </div>
            </div>
        );
    }
}

const Sidebar = () => {
    return (
        <div className="pure-u-md-7-24 pure-u-lg-6-24">

        </div>
    );
}

const WritePublication = (state) => {
    state = {
        writeFalse: true
    }
    return (
        <div className="write-publication-column">
            <div className="publication-box">
                <div className="textarea-header pure-g">
                    <div className="pure-u-2-3">
                        <label><FontAwesome name='edit' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', fontSize:"20px", marginRight:12+"px" }} />Share an update</label>
                    </div>
                </div>
                <div className="pure-g textarea-wrapper">
                    <div className="pure-u-1 textarea-container">
                        <textarea className="textarea" placeholder="Share what's in your mind"></textarea>
                        <FontAwesome name='image' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', fontSize:"20px", marginLeft:18+"px", color:"grey" }} />
                    </div>
                </div>
                <button className="publication-send"><FontAwesome name='share-alt' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', fontSize:"20px", color:"grey" }} /></button>
            </div>
        </div>
    );
}

const FeedContainer = (props) => {
    return (
        <div>
            <div className="feed-column">
                {props.publications.map(item => { return <PublicationBox key={item.id} item={item} /> })}
            </div>
        </div>
    );
}

const PublicationBox = ({ item, ...props }) => {
    return (
        <div className="publication-box">
            <div className="publication-box-wrapper">
                <div className="publication-header">
                    <div className="publication-header-image" style={{ backgroundImage: 'url(' + item.organization.image + ')' }} />
                    <div className="publication-header-info">
                        <div className="publication-header-title">{item.title}</div>
                        <div className="publication-header-company">{item.organization.name}</div>
                    </div>
                </div>
                <div className="publication-body">
                    <div className="publication-image">
                        <img src={item.image} />
                    </div>
                    <div className="publication-text">{item.text}</div>
                </div>
                <div className="publication-footer">
                    <div className="publication-footer-wrapper">
                        <div className="publication-date">{new Date(item.date).toLocaleDateString()}</div>
                        <div className="publication-numbers">
                            <InfoNumber icon="fas fa-heart" text={item.likes} />
                            <InfoNumber icon="fas fa-comment-alt" text={item.commentsNumber} />
                            <InfoNumber icon="fas fa-eye" text={item.views} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const InfoNumber = (props) => {
    return (
        <div className="info-number">
            <div className="info-number-icon">
                <i className={props.icon} />
            </div>
            <div className="info-number-text">{props.text}</div>
        </div>
    );
}