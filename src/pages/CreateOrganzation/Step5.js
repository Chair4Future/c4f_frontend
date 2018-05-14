import React from 'react';
import t from './../../configs/tcomb';
import { inject, observer } from 'mobx-react';


const Form = t.form.Form;

const Organization = t.struct({
    name: t.String,
    businessArea: t.Number
})

const options = {
    fields: {
        businessArea: {
            error: <i>Ola</i>
        }
    }
}

@observer
export default class Step5 extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
        this.form = React.createRef();
        this.isValidated = this.isValidated.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        console.log("ola")
    }

    isValidated() {
        const v = this.form.current.getValue();
        let isDataValid = false;
        let org;
        //FAZER O POST NO ULTIMO step ou penultimo
        if (v) {
            org = this.props.organization.organizationUpdate({ name: v.name, businessArea: v.businessArea })
            return isDataValid = true;
        }
        return isDataValid;
    }

    render() {
        return (
        <div>Thank you niggy</div>)
    }
}