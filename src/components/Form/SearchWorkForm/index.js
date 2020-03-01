import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import KeywordField from '../KeywordField/index';
import LocationField from '../LocationField/index';
import Button from '../../../UI-design-system/Button';
import {
    locationSelector,
    selectCategoriesChecked,
} from '../../../store/selectors/formSelectors';
import { clearForm } from '../../../store/actions/formActions';

const Form = styled.form`
    display: flex;
    margin-top: 30px;
    padding-left: 25px;
`

export const SearchWorkForm = ({ 
    location, 
    clearForm, 
    categoriesChecked,
}) => {
    const handleClick = e => {
        e.preventDefault();
        console.log('Form Submited');
        console.log('selected categories:', ...categoriesChecked);
        console.log('location:', location);
        clearForm();
    }

    return (
        <Form data-test="search-work-form">
            <KeywordField />
            <LocationField />
            <Button marginTop="3px" type="submit" onClick={handleClick}>
                Search
            </Button>
        </Form>
    );
}

const mapStateToProps = state => ({
    location: locationSelector(state),
    categoriesChecked: selectCategoriesChecked(state),
});

const mapDispatchToProps = (dispatch) => ({
    clearForm: () => dispatch(clearForm()),
});

KeywordField.propTypes = {
    location: PropTypes.string, 
    categoriesChecked: PropTypes.arrayOf(PropTypes.string),
    clearForm: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchWorkForm);
