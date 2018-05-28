import React from 'react';
import t from './../../configs/tcomb';
import { inject, observer } from 'mobx-react';
import axios from '../../configs/axios';


const Form = t.form.Form;

const Organization = t.struct({
    name: t.String,
    businessArea: t.String,
    logo: t.form.File,
    banner: t.form.File
})

const businessAreaLayout = (locals) => {
    return (
        <div className="form-group form-group-depth-1 form-group-name">
            <label htmlFor="tfid-0-1">Business Area</label>
            <input id="tfid-0-1" name="businessArea" type="text" className="form-control" onChange={(value) => locals.onChange(value)}/>
        </div>
    );
}

function onChange(evt) {
    this.locals.onChange(evt.target.value);
  }

const options = {
    fields: {
        logo: {
            type: "file"
        },
        banner: {
            type: "file"
        },
        businessArea:{
            
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
            //this.props.organization.organizationUpdate({ name: v.name, businessArea: v.businessArea, logo: v.logo, banner: v.banner })
            var test = new FormData();
            test.append("file",v.logo)
            let result = axios.post('/file', test);
            console.log(result)
            //return isDataValid = true; 
            return isDataValid;
        }
        return isDataValid;
    }
    render() {
        return (
            <Form ref={this.form} type={Organization} options={options} />
        )
    }
}