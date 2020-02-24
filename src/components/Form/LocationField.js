import React, { Component } from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';
import InputFieldWrapper from '../../UI-design-system/InputFieldWrapper';
import { InputWrapper } from './KeywordFieldStyles';

const LocationInput = styled.input`
    width: 272px;
    height: 37px;
    font-size: 14px;
    padding-left: 10px;
    border: none;
    border-radius: 3px;
    &:hover {
        outline: none;
    }
`;
const renderField = ({input, meta: { touched, error } }) => (
    <InputWrapper>
        <LocationInput 
            placeholder="Location"
            {...input}
        />
        {touched && error &&
            <span className="error">{error}</span>}
    </InputWrapper>
);

class LocationField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            locationList: [],
        };
    }

    fetchLocation = async (query) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `http://gd.geobytes.com/AutoCompleteCity?callback=?&filter=DE&q=${query}`; 
        fetch(proxyurl + url)
            .then(response => response.text())
            .then(contents => console.log(contents))
            .catch(() => console.log("Can’t access " + url + " response."));
    }
    

    handleChange = query => {
        this.fetchLocation(query)
        this.setState({query});
    }

  	render() {
        return (
            <InputFieldWrapper width="283px">
                <Field 
                    name="locationImput" 
                    component={renderField}/>
                <div>
                    {this.state.locationList}
                </div>
            </InputFieldWrapper>
        );
    }
}

export default LocationField;
