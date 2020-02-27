import React from 'react';
import { connect } from 'react-redux';
import {
    CategoryTitleWrapper,
    CategoryTitle,
    SearchAllCat,
    CategoriesContainer,
    CategoryListWrapper,
} from './CategoriesMenuStyles';
import { checkAllCategories } from '../../../../store/actions/formActions';
import {
    selectTopCategories,
    selectMoreCategories,
} from '../../../../store/selectors/formSelectors';
import CategoryList from './CategoryList/index';

const CategoriesMenu = ({ 
    topCategoriesChecked,
    moreCategoriesChecked,
    checkAllCategories,
}) => {
    return (
        <CategoriesContainer >
            <CategoryTitleWrapper>
                <CategoryTitle>
                    Top Categories
                </CategoryTitle>
                <SearchAllCat onClick={checkAllCategories}>
                    Search in all categories
                </SearchAllCat>
            </CategoryTitleWrapper>
            <CategoryListWrapper>
                <CategoryList
                    dataType="topCategoriesChecked"
                    data={topCategoriesChecked}
                />
            </CategoryListWrapper>
            <CategoryTitleWrapper>
                <CategoryTitle>More Categories</CategoryTitle>
            </CategoryTitleWrapper>
            <CategoryListWrapper height="150px" direction="row">
                <CategoryList 
                    dataType="moreCategoriesChecked"
                    data={moreCategoriesChecked} 
                />
            </CategoryListWrapper>
        </CategoriesContainer>
    )
}

const mapStateToProps = state => ({
    topCategoriesChecked: selectTopCategories(state),
    moreCategoriesChecked: selectMoreCategories(state),
});

const mapDispatchToProps = dispatch => ({
    checkAllCategories: () => dispatch(checkAllCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesMenu);