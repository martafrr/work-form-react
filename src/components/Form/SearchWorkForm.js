import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, reset } from 'redux-form';
import styled from 'styled-components';
import KeywordField from './KeywordField';
import LocationField from './LocationField';
import Button from '../../UI-design-system/Button';

const Form = styled.form`
    display: flex;
    margin-top: 30px;
    padding-left: 25px;
`

class SearchWorkForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /// TODO
        };
    }

    handleSubmit = e => {
        console.log('clicked')
        e.preventDefault();
        this.props.clearForm();
    }

  	render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <KeywordField />
                <LocationField />
                <Button marginTop="3px" type="submit">Search</Button>
            </Form>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    clearForm: () => dispatch(reset('searchWorkForm')),
});

SearchWorkForm = connect(mapDispatchToProps)(SearchWorkForm);

export default reduxForm({
    form: 'searchWorkForm',
})(SearchWorkForm);

