import React from 'react';
import t from './../../configs/tcomb';
import { inject,observer } from 'mobx-react';


const Form = t.form.Form;

const Organization = t.struct({
    name: t.String,
    businessArea: t.String,
    logo: t.String,
    banner: t.String
})

const options = {
    fields: {
        businessArea: {
            error: <i>Ola</i>
        }
    }
}

@observer
export default class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.form = React.createRef();
        this.isValidated = this.isValidated.bind(this);
    }

    isValidated() {
        const v = this.form.current.getValue();
        let isDataValid =false; 
        let org;
        if(v){
            org = this.props.organization.organizationUpdate({name : v.name, businessArea: v.businessArea, logo: v.logo, banner: v.banner})
            return isDataValid = true;
        }
        return isDataValid;
    }
    render() {
        return (
            <Form ref={this.form} type={Organization} options={options} />
        )
    }
}