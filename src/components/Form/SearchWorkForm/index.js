import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import KeywordField from '../KeywordField/index';
import LocationField from '../LocationField/index';
import Button from '../../../UI-design-system/Button';
import {
    keywordSelector,
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
    keyword,
    location, 
    clearForm, 
    categoriesChecked,
}) => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log('Form Submited');
        console.log('keyword:', keyword);
        console.log('selected categories:', ...categoriesChecked);
        console.log('location:', location);
        clearForm();
    }

    return (
        <Form data-test="search-work-form" onSubmit={handleSubmit}>
            <KeywordField />
            <LocationField submitForm={handleSubmit}/>
            <Button marginTop="3px" type="submit">
                Search
            </Button>
        </Form>
    );
}

const mapStateToProps = state => ({
    keyword: keywordSelector(state),
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
