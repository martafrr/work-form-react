import styled from 'styled-components';
import P from '../../../../UI-design-system/P';
import Button from '../../../../UI-design-system/Button';

export const CategoriesContainer = styled.div`
    height: 399px;
    background-color: white;
    border-radius: 3px;
`;

export const CategoryTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid #d0cec1;
    height: 35px;
`;

export const CategoryTitle = styled(P)`
    font-weight: 700;
    margin-left: 10px;
    margin-top: 10px;
`;

export const SearchAllCat = styled(Button)`
    font-size: 13px;
    color: rgb(6,134,140);
    margin-right: 10px;
    margin-top: 10px;
    background: none;
    height: auto;
    width: auto;
    font-weight: normal;
    border: none;
    margin-right: 0;
    margin-top: 0;
    
    /* TODO: check */
    &:focus ${Button} {
        border: none;
    }
`;

export const CategoryListWrapper = styled.div`
    display: flex;
    flex-direction: ${props => (props.direction ? props.direction : 'column')};
    overflow-y: scroll;
    flex-wrap: wrap;
    height: ${props => (props.height ? props.height : '178px')};
    border-bottom: 0.5px solid #d0cec1;
    width: 448px;
`;
