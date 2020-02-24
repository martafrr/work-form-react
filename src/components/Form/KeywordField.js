import React, { Component } from 'react';
import { Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import P from '../../UI-design-system/P';
import InputFieldWrapper from '../../UI-design-system/InputFieldWrapper';
import {
    InputWrapper,
    CategoriesButton,
    KeywordInput,
    CategoriesWrapper,
} from './KeywordFieldStyles';
import CategoriesList from './CategoriesList';

const renderField = ({input, meta: { touched, error } }) => (
    <InputWrapper>
        <KeywordInput
            placeholder="Enter keyword" 
            {...input}
        />
        {touched && error &&
            <span className="error">{error}</span>}
    </InputWrapper>
);

class KeywordField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            showCategories: false,
        };
    }

    handleChangeKeywordInout = keyword => {
        console.log(keyword)
        this.setState({ keyword },console.log(this.state))
    }

    toggleCategories = e => {
        e.preventDefault();
        this.setState({ showCategories: !this.state.showCategories});
    }

    handleClickCategory = e => {
        e.preventDefault();
        console.log(e.target)
    }

  	render() {
        const { showCategories } = this.state;

        return (
            <div>
                <InputFieldWrapper>
                    <Field 
                        name="keywordInput" 
                        component={renderField}/>
                    <CategoriesButton onClick={this.toggleCategories}>
                        <P margin="12px" color="grey" width="173px">in all categories</P>
                        <FontAwesomeIcon style={{marginBottom: '2px'}} icon={faSortDown} />
                    </CategoriesButton>
                </InputFieldWrapper>
                {showCategories && <CategoriesWrapper>
                    <CategoriesList onCategoryClick={this.handleClickCategory} />
                </CategoriesWrapper>}
            </div>
        );
    }
}

export default KeywordField;
