import React, { Component } from 'react';
import './feed.css';
import FontAwesome from 'react-fontawesome';
import axios from '../../configs/axios';
import { observer, inject } from 'mobx-react';

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


@inject("user")
@observer
class WritePublication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            company_id: "01079c6f-85b5-4d41-90e8-bccb2b77f863",
            fileName_img: "",
            imageUpload: false
            
        }
        this.fileUpload = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    async handleSubmit() {
        var test = new FormData();
        test.append("file", this.fileUpload.files[0])
        let result;
        await axios.post('/file', test).then(response => { return response
        }).then(body => {
            return this.setState({fileName_img: body.data.filename})
        });

        var toSend = {
            title: this.state.title,
            text: this.state.text,
            brand_image: this.state.fileName_img,
            company_id: this.state.company_id
        }

        let response = axios.post("/publication", toSend);
        console.log(response)
    }

    selectImage = () => {
        this.setState({imageUpload: true});
    }

    //outsystems
    //noesis
    //critical
    //softinsa 
    render() {
        const { organization, user} = this.props.user;
        const currentOrganization = organization? user.organizations.find(q => q.id === organization) : null;

        console.log(this.props)
        return (
        currentOrganization && 
            <div>
                <div className="write-publication-column">
                    <div className="publication-box">
                        <div className="write-publication-box-wrapper">
                            <div className="publication-box-title">
                                <input name="title" className="publication-input" onChange={this.handleInputChange} placeholder="Title"/>
                            </div>
                            <div className="publication-box-textarea">
                                <textarea className="publication-textarea" name="text" placeholder="Share what's in your mind..." onChange={this.handleInputChange}></textarea>
                            </div>
                            <div className="publication-box-footer">
                                <div className="publication-box-image">
                                    {!this.state.imageUpload && <FontAwesome name='image' className="publication-box-image-icon" onClick={this.selectImage}/>}
                                    {this.state.imageUpload && <input id="file-input" type="file" name="img" ref={(ref) => this.fileUpload = ref}/>}
                                </div>
                                <button className="publication-send-button" onClick={this.handleSubmit}>
                                    <span>Post</span><FontAwesome name='share' id="publication-button-icon"/>
                                </button>
                            </div>
                            <div className="publication-box-user">
                                <span>publish as: </span> 
                                <div className="publication-user-info-container">
                                    <div style={{ backgroundImage: 'url(' + currentOrganization.img + ')' }}/>
                                    <span>{currentOrganization.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )       
    }
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