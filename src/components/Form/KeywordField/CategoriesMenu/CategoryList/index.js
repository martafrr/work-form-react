import React from 'react';
import PropTypes from 'prop-types';
import {
    CategoryContainer,
    CategoryLabel,
    Category,
} from './CategoryListStyles';

const CategoryList = ({ 
    categoryType,
    categoryData,
    categoriesChecked,
    onChange,
}) => {
    return categoryData.map((category, index) => {
        const isChecked = categoriesChecked.indexOf(category) > -1 ? true : false;

        return (
            <CategoryContainer key={`${index}-${category}`} data-test="category-container">
                <CategoryLabel>
                    <input
                        checked={isChecked}
                        value={category}
                        type="checkbox"
                        onChange={e => onChange(e, categoryType)}
                    />
                    <Category>
                        {category}
                    </Category>
                </CategoryLabel>
            </CategoryContainer>
        );
    });;
};

CategoryList.propTypes = {    
    categoryType: PropTypes.string,
    categoryData: PropTypes.array,
    categoriesChecked: PropTypes.array,
    onChange: PropTypes.func
}

export default CategoryList;
