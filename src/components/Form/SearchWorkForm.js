import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import KeywordField from './KeywordField/index';
import LocationField from './LocationField/index';
import Button from '../../UI-design-system/Button';
import {
    locationSelector,
    selectTopCategoriesChecked,
    selectMoreCategoriesChecked,
} from '../../store/selectors/formSelectors';
import { clearForm } from '../../store/actions/formActions';

const Form = styled.form`
    display: flex;
    margin-top: 30px;
    padding-left: 25px;
`

class SearchWorkForm extends Component {
    handleClick = e => {
        e.preventDefault();
        const { 
            location, 
            clearForm, 
            topCategoriesChecked,
            moreCategoriesChecked,
        } = this.props;
        console.log('Form Submited');
        console.log('selectedcCategories:', topCategoriesChecked, moreCategoriesChecked);
        console.log('location:', location);
        clearForm();
    }

  	render() {
        return (
            <Form>
                <KeywordField />
                <LocationField />
                <Button marginTop="3px" type="submit" onClick={this.handleClick}>
                    Search
                </Button>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    location: locationSelector(state),
    topCategoriesChecked: selectTopCategoriesChecked(state),
    moreCategoriesChecked: selectMoreCategoriesChecked(state),
});

const mapDispatchToProps = (dispatch) => ({
    clearForm: () => dispatch(clearForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchWorkForm);



