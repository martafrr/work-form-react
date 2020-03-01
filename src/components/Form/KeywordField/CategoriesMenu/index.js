import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    CategoryTitleWrapper,
    CategoryTitle,
    SearchAllCat,
    CategoriesContainer,
    CategoryListWrapper,
} from './CategoriesMenuStyles';
import { resetCategories } from '../../../../store/actions/formActions';
import {
    selectTopCategories,
    selectMoreCategories,
    selectCategoriesChecked,
} from '../../../../store/selectors/formSelectors';
import CategoryList from './CategoryList/index';

const CategoriesMenu = ({ 
    topCategoriesData,
    moreCategoriesData,
    resetCategories,
    categoriesChecked,
}) => {
    const onChange = e => {
        if(categoriesChecked.indexOf(e.target.value) === -1) {
            resetCategories([...categoriesChecked, e.target.value]);
        } else {
            const updatedCheckedCat = categoriesChecked.filter(cat =>
                cat !== e.target.value  
            );
            resetCategories(updatedCheckedCat);
        }
    };

    const checkAllCategories = e => {
        e.preventDefault();
        if(categoriesChecked.length < 10) {
            return resetCategories([...topCategoriesData, ...moreCategoriesData]);
        } else {
            return resetCategories([]);
        }
    }
    
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
                    onChange={onChange}
                    categoryType="topCategoriesChecked"
                    categoryData={topCategoriesData}
                    categoriesChecked={categoriesChecked}
                />
            </CategoryListWrapper>
            <CategoryTitleWrapper>
                <CategoryTitle>More Categories</CategoryTitle>
            </CategoryTitleWrapper>
            <CategoryListWrapper height="150px" direction="row">
                <CategoryList
                    onChange={onChange}
                    categoryType="moreCategoriesChecked"
                    categoryData={moreCategoriesData}
                    categoriesChecked={categoriesChecked}
                />
            </CategoryListWrapper>
        </CategoriesContainer>
    )
}

const mapStateToProps = state => ({
    topCategoriesData: selectTopCategories(state),
    moreCategoriesData: selectMoreCategories(state),
    categoriesChecked: selectCategoriesChecked(state),
});

const mapDispatchToProps = dispatch => ({
    resetCategories: (list, dataType) => dispatch(resetCategories(list, dataType)),
});

CategoriesMenu.propTypes = {
    topCategoriesData: PropTypes.array,
    moreCategoriesData: PropTypes.array,
    categoriesChecked: PropTypes.array,
    resetCategories: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesMenu);