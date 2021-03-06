import React from 'react';
import t from './../../configs/tcomb';
import { inject, observer } from 'mobx-react';


const Form = t.form.Form;

const Organization = t.list(t.struct({
    title: t.String,
    text: t.String,
    img: t.form.File
}))

const options = {


    item: {
        fields:{
        img: {
            type: "file"
        }}
    }

}

@observer
export default class Step4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [{
                title: "",
                text: "",
                img: undefined
            }]
        };
        this.form = React.createRef();
        this.isValidated = this.isValidated.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.setState({ value });
    }

    isValidated() {
        const v = this.form.current.getValue();
        let isDataValid = false;
        let org;
        if (v) {
            org = this.props.organization.organizationUpdate({ information: v })
            console.log(this.props.organization)
            return isDataValid = true;
        }
        return isDataValid;
    }
    render() {
        return (
            <Form ref={this.form} type={Organization} options={options} value={this.state.value} onChange={this.onChange} />
        )
    }
}