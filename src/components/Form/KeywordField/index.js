import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import P from '../../../UI-design-system/P';
import InputFieldWrapper from '../../../UI-design-system/InputFieldWrapper';
import {
    InputWrapper,
    CategoriesButton,
    KeywordInput,
    CategoriesWrapper,
} from './KeywordFieldStyles';
import CategoriesMenu from './CategoriesMenu/index';
import { changeKeywordValue } from '../../../store/actions/formActions';
import { keywordSelector } from '../../../store/selectors/formSelectors';

export const KeywordField = ({ keywordValue, changeKeywordValue }) => {
    const [showCategories, setShowCategories] = useState(false)

    const handleClick = e => {
        e.preventDefault();
        setShowCategories(!showCategories);
    }

    return (
        <div>
            <InputFieldWrapper data-test="input-field-wrapper">
                <InputWrapper>
                    <KeywordInput
                        data-test="keyword-input"
                        value={keywordValue}
                        placeholder="Enter keyword" 
                        type="text"
                        onChange={e => changeKeywordValue(e.target.value)}
                    />
                </InputWrapper>
                <CategoriesButton
                    data-test="toggle-btn"
                    type="button"
                    onClick={e => handleClick(e)} 
                >
                    <P margin="12px" color="grey" width="173px">in all categories</P>
                    <FontAwesomeIcon style={{marginBottom: '2px'}} icon={faSortDown} />
                </CategoriesButton>
            </InputFieldWrapper>
            {showCategories && <CategoriesWrapper>
                <CategoriesMenu />
            </CategoriesWrapper>}
        </div>
    );
};

const mapStateToProps = state => ({
    keywordValue: keywordSelector(state),
});

const mapDispatchToProps = dispatch => ({
    changeKeywordValue: value => dispatch(changeKeywordValue(value)),
});

KeywordField.propTypes = {
    keywordValue: PropTypes.string,
    changeKeywordValue: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordField);
