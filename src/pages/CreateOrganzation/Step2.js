import React from 'react';
import t from './../../configs/tcomb';
import { inject, observer } from 'mobx-react';
import Countries from 'country-list';

const CountryList = Countries().getNameList();

const Form = t.form.Form;

var DispCountry = t.enums(CountryList);

DispCountry.options = Object.keys(DispCountry.meta.map).map(function (value) {
    return {value: value, text: DispCountry.meta.map[value]}
})

const Organization = t.list(t.struct({
    countryCode: DispCountry,
    city: t.String,
    address: t.String
}))

const options = {
    disableOrder: true
}

@observer
export default class Step1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [{
                countryCode: "",
                city: "",
                address: ""
              }]
        };
        this.form = React.createRef();

        this.isValidated = this.isValidated.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.setState({value});
      }

    isValidated() {
        const v = this.form.current.getValue();
        let isDataValid = false;
        if (v) {
            this.props.organization.organizationUpdate({ addresses: v });
            return isDataValid = true;
        }
        return isDataValid;
    }
    render() {
        return (
            <Form ref={this.form} type={Organization} value={this.state.value} options={options} onChange={this.onChange}/>
        )
    }
}