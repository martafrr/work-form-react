import React from 'react';
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
            <CategoryContainer key={`${index}-${category}`}>
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


export default CategoryList;
