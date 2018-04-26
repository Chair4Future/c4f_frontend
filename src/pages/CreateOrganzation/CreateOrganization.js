import React from 'react';
import Container from './../../components/Container/Container';
import FontAwesome from 'react-fontawesome';
import './../../styles/buttons.css';
import './CreateOrganization.css';
import axios from '../../configs/axios';


export default class CreateOrganization extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: undefined,
            description: undefined
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    async handleSubmit(){
        try {
            const response = await axios.post('company', this.state);
            console.log(response);
            if(response === 200){

            }
        } catch (error) {
            console.error(error);
        }
    }


    render() {
        return (
            <div className="organization-container">
                <div className="organization-content">
                    <Container title={"Create organization"} edit={false}>
                        <div className="org-content-title">Name</div>
                        <input name="name" onChange={this.handleInputChange} />
                        <div className="org-content-title">Description</div>
                        <textarea name="description" rows="7" onChange={this.handleInputChange}></textarea>
                        <div className="org-button-create">
                        <button className="cf-button cf-button-round green" onClick={this.handleSubmit}>Create</button>
                    </div>
                    </Container>
                </div>
            </div>
        )
    }
}