import React from 'react';
import styled from 'styled-components';
import P from '../../UI-design-system/P';
import Checkbox from '../../UI-design-system/Checkbox';

const CategoryTitle = styled(P)`
    font-weight: 700;
    margin-left: 10px;
`;
const SearchAllCat = styled(P)`
    color: rgb(6,134,140);
    margin-right: 10px;
`

export const CategoriesContainer = styled.div`
    height: 385px;;
    background-color: white;
    border-radius: 3px;
`;

const CategoriesList = ({ onCategoryClick }) => {
    let checked = false;
    const handleCheckboxChange = () => {
        checked = !checked;
        console.log(checked)
    }
    return (
        <CategoriesContainer onClick={onCategoryClick}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <CategoryTitle>
                    Top Categories
                </CategoryTitle>
                <SearchAllCat>
                    Search in all categories
                </SearchAllCat>
            </div>
            <div>
                <label>
                    <Checkbox
                        checked={checked}
                        onChange={handleCheckboxChange}
                    />
                    <span>IT and telecommunication (4440)</span>
                </label>
                <P>Sales and Commerce (3263)</P>
                <P>Production, construction and trade (2586)</P>
                <P>Management / executive and strategic management (1982)</P>
                <P>Other (3636)</P>
                <P>Engineering / technical (2652)</P>
                <P>Health, medical and social (2130)</P>
                <P>Finance and accounting (1979)</P>
            </div>
            <div>
                <CategoryTitle>More Categories</CategoryTitle>
            </div>
            <div>
                <P>Not cateforized (1468)</P>
                <P>Banking, insurance and financial services (1342)</P>
                <P>Purchasing, transport and logistics (719)</P>
                <P>Administration (1439)</P>
                <P>Marketing and advertising (1304)</P>
                <P>Training / instruction (547)</P>
            </div>
        </CategoriesContainer>
    )
}

export default CategoriesList;