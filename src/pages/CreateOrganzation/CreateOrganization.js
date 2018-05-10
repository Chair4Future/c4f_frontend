import React from 'react';
import Container from './../../components/Container/Container';
import FontAwesome from 'react-fontawesome';
import './../../styles/buttons.css';
import './CreateOrganization.css';
import axios from '../../configs/axios';
import t from './../../configs/tcomb';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import { inject } from 'mobx-react';
var StepZilla = require('react-stepzilla').default

const Form = t.form.Form;

@inject('organization')
export default class CreateOrganization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const steps =
            [
                { name: 'Step 1', component: <Step1 organization={this.props.organization} /> },
                { name: 'Step 2', component: <Step2 organization={this.props.organization} /> },
                { name: 'Step 3', component: <Step3 organization={this.props.organization} /> },
                { name: 'Step 4', component: <Step4 organization={this.props.organization} /> },
                { name: 'Step 5', component: <Step5 organization={this.props.organization} /> }
            ]

        return (
            <div className="organization-container">
                <div className="organization-content">
                    <Container title={"Create organization"} edit={false}>
                        <div className='step-progress'>
                            {/*nextTextOnFinalActionStep: "Save" é aplicado ao penultimo*/}
                            <StepZilla steps={steps} stepsNavigation={false} nextTextOnFinalActionStep={"Save"} />
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}