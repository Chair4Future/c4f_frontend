import React from 'react';
import t from './../../configs/tcomb';
import { inject,observer } from 'mobx-react';


const Form = t.form.Form;

const Organization = t.list(t.struct({
    name: t.String,
    email: t.String,
    phone: t.Number
}))

const options = {
    fields: {
        
    }
}

@observer
export default class Step3 extends React.Component {
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
            org = this.props.organization.organizationUpdate({contacts: v})
            console.log(org)
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