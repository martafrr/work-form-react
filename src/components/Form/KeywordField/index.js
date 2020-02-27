import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class KeywordField extends Component {
    state = {
        showCategories: false,
    };

    toggleShowCategories = e => {
        e.preventDefault();
        this.setState({ showCategories: !this.state.showCategories});
    }

  	render() {
        const { showCategories } = this.state;
        const { keywordValue, changeKeywordValue } = this.props;
        return (
            <div>
                <InputFieldWrapper>
                    <InputWrapper>
                        <KeywordInput
                            value={keywordValue}
                            placeholder="Enter keyword" 
                            type="text"
                            onChange={(e) => changeKeywordValue(e.target.value)}
                        />
                    </InputWrapper>
                    <CategoriesButton onClick={this.toggleShowCategories}>
                        <P margin="12px" color="grey" width="173px">in all categories</P>
                        <FontAwesomeIcon style={{marginBottom: '2px'}} icon={faSortDown} />
                    </CategoriesButton>
                </InputFieldWrapper>
                {showCategories && <CategoriesWrapper>
                    <CategoriesMenu />
                </CategoriesWrapper>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    keywordValue: keywordSelector(state),
});

const mapDispatchToProps = dispatch => ({
    changeKeywordValue: value => dispatch(changeKeywordValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(KeywordField);
