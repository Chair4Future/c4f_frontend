import React from 'react';
import t from './../../configs/tcomb';
import { inject, observer } from 'mobx-react';


const Form = t.form.Form;

const Organization = t.struct({
    name: t.String,
    businessArea: t.String,
    logo: t.form.File,
    banner: t.form.File
})

const options = {
    fields: {
        logo: {
            type: "file"
        },
        banner: {
            type: "file"
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
        let isDataValid = false;
        if (v) {
            this.props.organization.organizationUpdate({ name: v.name, businessArea: v.businessArea, logo: v.logo, banner: v.banner })
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