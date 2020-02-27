import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    CategoryContainer,
    CategoryLabel,
    Category,
} from './CategoryListStyles';
import { resetCategories } from '../../../../../store/actions/formActions';

const CategoryList = ({ dataType, data, resetCategories }) => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        resetCategories(items, dataType);
    }, [items, resetCategories, dataType]);
  
    const onChange = e => {
        if(items.indexOf(e.target.value) === -1) {
            setItems([...items, e.target.value]);
        } else {
            const updatedCheckedCat = items.filter(cat =>
                cat !== e.target.value  
            );
            setItems([...updatedCheckedCat]);
        }
    };

    return data.map((category, index) => {
        return (
            <CategoryContainer key={`${index}-${data}`}>
                <CategoryLabel>
                    <input
                        value={category}
                        type="checkbox"
                        onChange={e => onChange(e)}
                    />
                    <Category>
                        {category}
                    </Category>
                </CategoryLabel>
            </CategoryContainer>
        );
    });;
};

const mapDispatchToProps = dispatch => ({
    resetCategories: (list, dataType) => dispatch(resetCategories(list, dataType)),
});

export default connect(null, mapDispatchToProps)(CategoryList);
